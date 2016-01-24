"use strict";

/**
 * Blueprint API Configuration
 *
 * These settings are for the global configuration of blueprint routes
 * and request options (which impact the behavior of blueprint actions)
 *
 * You may also override any of these settings on a per-controller basis
 * by defining a '_config' key in your controller definition, and assigning it
 * a configuration object with overrides for the settings in this file
 */

module.exports = {
  blueprints: {
    /**
     * When enabled, GET, POST, PUT and DELETE routes will be generated for everyone of a controller's actions
     * @type {Boolean}
     */
    actions: true,

    /**
     * When enabled, `index` action will be default action
     * @type {Boolean}
     */
    index: true,

    /**
     * REST blueprints are the automatically generated routes Sails uses to expose a conventional REST API
     * on top of a controller's `find`, `findOne`, `create`, `update`, and `destroy` actions
     * @type {Boolean}
     */
    rest: true,

    /**
     * Shortcut routes are simple helpers to provide access to a controller's CRUD methods from your browser's URL bar
     * @type {Boolean}
     */
    shortcuts: false,

    /**
     * An optional mount path for all blueprint routes on a controller, including `rest`, `actions`, and `shortcuts`
     * @type {String}
     */
    prefix: '/v1',

    /**
     * An optional mount path for all blueprint routes on a controller, including only `rest`
     * @type {String}
     */
    restPrefix: '',

    /**
     * Whether to pluralize controller names in blueprint routes
     * @type {Boolean}
     */
    pluralize: true,

    /**
     * Whether the blueprint controllers should populate model fetches with data
     * from other models which are linked by associations
     * @type {Boolean}
     */
    populate: false,

    /**
     * Whether to run Model.watch() in the find and findOne blueprint actions
     * @type {Boolean}
     */
    autoWatch: false,

    /**
     * The default number of records to show in the response from a "find" action
     * @type {Number}
     */
    defaultLimit: 20
  }
};
