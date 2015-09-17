/**
 * Generic Error Handler
 *
 * Calls the appropriate custom response for a given error
 */

import _ from 'lodash';

export default function (error) {
  let res = this.res;
  let code = _.get(error, 'code');
  let message = _.get(error, 'reason') || _.get(error, 'message');
  let root = _.get(error, 'root');
  let data = _.get(error, 'invalidAttributes') || _.omit(error, ['name', 'code', 'reason', 'message', 'root', 'status', 'oauthError']);
  let statusCode = _.get(error, 'status') || _.get(error, 'oauthError') || 500;
  let config = {code, message, root};

  if (statusCode === 401) return res.unauthorized(data, config);
  if (statusCode === 403) return res.forbidden(data, config);
  if (statusCode === 404) return res.notFound(data, config);
  if (statusCode >= 400 && statusCode < 500) return res.badRequest(data, config);

  return res.serverError(data, config);
}
