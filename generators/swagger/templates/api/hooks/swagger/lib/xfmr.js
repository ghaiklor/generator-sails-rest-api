"use strict";

/**
 * https://github.com/tjwebb/sails-swagger
 */

const hoek = require('hoek');
const _ = require('lodash');
const pluralize = require('pluralize');
const Spec = require('./spec');

const singularize = _.partial(pluralize, _, 1);

const methodMap = {
  post: 'Create Object(s)',
  get: 'Read Object(s)',
  put: 'Update Object(s)',
  patch: 'Update Object(s)',
  delete: 'Destroy Object(s)',
  options: 'Get Resource Options',
  head: 'Get Resource headers'
};

const Transformer = {
  getSwagger (sails, pkg) {
    return {
      swagger: '2.0',
      info: Transformer.getInfo(pkg),
      host: sails.config.swagger.host,
      tags: Transformer.getTags(sails),
      definitions: Transformer.getDefinitions(sails),
      paths: Transformer.getPaths(sails)
    }
  },

  fixPath(sails, path) {
    let prefix = sails.config.blueprints.prefix;
    return path.replace(prefix, '');
  },

  /**
   * Convert a package.json file into a Swagger Info Object
   * http://swagger.io/specification/#infoObject
   */
  getInfo (pkg) {
    return hoek.transform(pkg, {
      'title': 'name',
      'description': 'description',
      'version': 'version',

      'contact.name': 'author',
      'contact.url': 'homepage',

      'license.name': 'license'
    })
  },

  /**
   * http://swagger.io/specification/#tagObject
   */
  getTags (sails) {
    return _.map(_.map(sails.controllers, item => item['globalId']), tagName => {
      return {
        name: tagName
        //description: `${tagName} Controller`
      }
    })
  },

  /**
   * http://swagger.io/specification/#definitionsObject
   */
  getDefinitions (sails) {
    let definitions = _.transform(sails.models, (definitions, model, modelName) => {
      definitions[model.identity] = {
        properties: Transformer.getDefinitionProperties(model.definition)
      }
    });

    delete definitions['undefined'];

    return definitions;
  },

  getDefinitionProperties (definition) {
    return _.mapValues(definition, (def, attrName) => {
      let property = _.pick(def, [
        'type', 'description', 'format'
      ]);

      return Spec.getPropertyType(property.type);
    });
  },

  /**
   * Convert the internal Sails route map into a Swagger Paths
   * Object
   * http://swagger.io/specification/#pathsObject
   * http://swagger.io/specification/#pathItemObject
   */
  getPaths (sails) {
    let routes = sails.router._privateRouter.routes
    let pathGroups = _.chain(routes)
      .values()
      .flatten()
      .reject({path: '/*'})
      .reject({path: '/__getcookie'})
      .reject({path: '/csrfToken'})
      .reject({path: '/csrftoken'})
      .groupBy('path')
      .mapKeys((_, path) => {
        return path.replace(/:(\w+)\??/g, '{$1}')
      })
      .value();

    pathGroups = _.reduce(pathGroups, function (result, routes, path) {
      path = path.replace(/:(\w+)\??/g, '{$1}')
      if (result[path])
        result[path] = _.union(result[path], routes)
      else
        result[path] = routes
      return result
    }, [])

    return _.mapValues(pathGroups, pathGroup => {
      return Transformer.getPathItem(sails, pathGroup)
    })
  },

  getModelFromPath (sails, path) {
    let fixed = this.fixPath(sails, path).split('/');
    let $ = fixed[0];
    let parentModelName = fixed[1];
    let parentId = fixed[2];
    let childAttributeName = fixed[3];
    let childId = fixed[4];
    let parentModel = sails.models[singularize(parentModelName)];
    let childAttribute = _.get(parentModel, ['attributes', childAttributeName]);
    let childModelName = _.get(childAttribute, 'collection') || _.get(childAttribute, 'model');
    let childModel = sails.models[childModelName];

    return childModel || parentModel;
  },

  /**
   * http://swagger.io/specification/#definitionsObject
   */
  getDefinitionReference (sails, path) {
    let model = Transformer.getModelFromPath(sails, path);
    if (model) {
      return '#/definitions/' + model.identity;
    }
  },

  /**
   * http://swagger.io/specification/#pathItemObject
   */
  getPathItem (sails, pathGroup) {
    let methodGroups = _.chain(pathGroup)
      .keyBy('method')
      .pick([
        'get', 'post', 'put', 'head', 'options', 'patch', 'delete'
      ])
      .value();

    return _.mapValues(methodGroups, (methodGroup, method) => {
      return Transformer.getOperation(sails, methodGroup, method);
    });
  },

  /**
   * http://swagger.io/specification/#operationObject
   */
  getOperation (sails, methodGroup, method) {
    return {
      summary: methodMap[method],
      consumes: ['application/json'],
      produces: ['application/json'],
      parameters: Transformer.getParameters(sails, methodGroup),
      responses: Transformer.getResponses(sails, methodGroup),
      tags: Transformer.getPathTags(sails, methodGroup)
    }
  },

  /**
   * A list of tags for API documentation control. Tags can be used for logical
   * grouping of operations by resources or any other qualifier.
   */
  getPathTags (sails, methodGroup) {
    return _.uniq(_.compact([
      Transformer.getPathModelTag(sails, methodGroup),
      Transformer.getPathControllerTag(sails, methodGroup),
      Transformer.getControllerFromRoute(sails, methodGroup)
    ]))
  },

  getPathModelTag (sails, methodGroup) {
    let model = Transformer.getModelFromPath(sails, methodGroup.path);
    return model && model.globalId;
  },

  getPathControllerTag (sails, methodGroup) {
    let fixed = this.fixPath(sails, methodGroup.path).split('/');
    let $ = fixed[0];
    let pathToken = fixed[1];
    return _.get(sails.controllers, [pathToken, 'globalId']);
  },

  getControllerFromRoute (sails, methodGroup) {
    let route = sails.config.routes[`${methodGroup.method} ${this.fixPath(sails, methodGroup.path)}`];
    if (!route) return;

    let pattern = /(.+)Controller/;
    let controller = route.controller || (_.isString(route) && route.split('.')[0]);

    if (!controller) return;

    return /(.+)Controller/.exec(controller)[1];
  },

  /**
   * http://swagger.io/specification/#parameterObject
   */
  getParameters (sails, methodGroup) {
    let routeParams = methodGroup.keys;

    if (!routeParams.length) return;

    return _.map(routeParams, param => {
      return {
        name: param.name,
        in: 'path',
        required: true,
        type: 'string'
      }
    })
  },

  /**
   * http://swagger.io/specification/#responsesObject
   */
  getResponses (sails, methodGroup) {
    let $ref = Transformer.getDefinitionReference(sails, methodGroup.path);
    let ok = {
      description: 'The requested resource'
    };

    if ($ref) {
      ok.schema = {'$ref': $ref}
    }
    return {
      '200': ok,
      '404': {description: 'Resource not found'},
      '500': {description: 'Internal server error'}
    }
  }
};

module.exports = Transformer;
