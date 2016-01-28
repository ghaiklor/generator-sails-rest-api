"use strict";

/**
 * 201 (Created) Response
 *
 * The request has been fulfilled and resulted in a new resource being created.
 * Successful creation occurred (via either POST or PUT).
 * Set the Location header to contain a link to the newly-created resource (on POST).
 * Response body content may or may not be present.
 */

const _ = require('lodash');

module.exports = function (data, config) {
  const response = _.assign({
    code: _.get(config, 'code', 'CREATED'),
    message: _.get(config, 'message', 'The request has been fulfilled and resulted in a new resource being created'),
    data: data || {}
  }, _.get(config, 'root', {}));

  this.res.status(201);
  this.res.jsonx(response);
};
