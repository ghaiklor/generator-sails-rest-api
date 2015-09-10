/**
 * 201 (Created) Response
 *
 * The request has been fulfilled and resulted in a new resource being created.
 * Successful creation occurred (via either POST or PUT).
 * Set the Location header to contain a link to the newly-created resource (on POST).
 * Response body content may or may not be present.
 */

module.exports = function (data) {
  var response = _.assign({
    code: _.get(data, 'code', 'CREATED'),
    message: _.get(data, 'message', 'The request has been fulfilled and resulted in a new resource being created'),
    data: _.get(data, 'data', data || {})
  }, _.get(data, 'root', {}));

  this.res.status(201);
  this.res.jsonx(response);
};
