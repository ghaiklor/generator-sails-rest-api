"use strict";

/**
 * https://github.com/tjwebb/sails-swagger
 */

const _ = require('lodash');
const xfmr = require('./lib/xfmr');
const express = require('express');

module.exports = sails => {
  return {
    defaults(overrides) {
      this.bindExplorerRoute();

      return {
        'swagger': {
          pkg: {
            name: 'No package information',
            description: 'You should set sails.config.swagger.pkg to retrieve the content of the package.json file',
            version: '0.0.1'
          }
        }
      };
    },

    initialize(cb) {
      let hook = sails.hooks.swagger;

      sails.after('lifted', () => {
        hook.doc = xfmr.getSwagger(sails, sails.config.swagger.pkg);
      });

      cb();
    },

    bindExplorerRoute() {
      let originalCustomMiddleware = _.get(sails.config, 'http.customMiddleware');
      let customMiddleware = app => {
        app.use('/explorer', express.static(process.cwd() + '/explorer'));
        if (_.isFunction(originalCustomMiddleware)) {
          originalCustomMiddleware(app);
        }
      };
      _.set(sails.config, 'http.customMiddleware', customMiddleware);
    }

  }
};
