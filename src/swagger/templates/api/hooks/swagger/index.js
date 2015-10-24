/**
 * https://github.com/tjwebb/sails-swagger
 */

import path from 'path'
import _ from 'lodash'
import Marlinspike from 'marlinspike'
import xfmr from './lib/xfmr'
import express from 'express';

class Swagger extends Marlinspike {
  defaults(overrides) {
    this.bindExplorerRoute();

    return {
      'swagger': {
        pkg: {
          name: 'No package information',
          description: 'You should set sails.config.swagger.pkg to retrieve the content of the package.json file',
          version: '0.0.0'
        }
      }
    };
  }

  constructor(sails) {
    super(sails, module)
  }

  initialize(next) {
    let hook = this.sails.hooks.swagger;
    this.sails.after('lifted', () => {
      hook.doc = xfmr.getSwagger(this.sails, this.sails.config.swagger.pkg);
    });

    next();
  }

  bindExplorerRoute() {
    let originalCustomMiddleware = _.get(this.sails.config, 'http.customMiddleware');
    let customMiddleware = app => {
      app.use('/explorer', express.static(process.cwd() + '/explorer'));
      if (_.isFunction(originalCustomMiddleware)) {
        originalCustomMiddleware(app);
      }
    };
    _.set(this.sails.config, 'http.customMiddleware', customMiddleware);
  }
}

export default Marlinspike.createSailsHook(Swagger)
