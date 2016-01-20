/**
 * 500 (Internal Server Error) Response
 *
 * A generic error message, given when no more specific message is suitable.
 * The general catch-all error when the server-side throws an exception.
 */

import _ from 'lodash';

export default function (data, config) {
  let response = _.assign({
    code: _.get(config, 'code', 'E_INTERNAL_SERVER_ERROR'),
    message: _.get(config, 'message', 'Something bad happened on the server'),
    data: data || {}
  }, _.get(config, 'root', {}));

  this.res.status(500);
  this.res.jsonx(response);
};
