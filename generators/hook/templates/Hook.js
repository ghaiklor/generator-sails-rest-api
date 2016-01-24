"use strict";

/**
 * <%= name %>Hook
 * Hook that ...
 */

module.exports = sails => {
  return {
    configure: () => true,

    defaults: config => config,

    initialize: cb => cb(),

    routes: {
      before: {},
      after: {}
    }
  }
};
