/**
 * https://github.com/tjwebb/sails-swagger
 */

import path from 'path'
import _ from 'lodash'
import Marlinspike from 'marlinspike'
import xfmr from './lib/xfmr'

class Swagger extends Marlinspike {
  defaults(overrides) {
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
}

export default Marlinspike.createSailsHook(Swagger)
