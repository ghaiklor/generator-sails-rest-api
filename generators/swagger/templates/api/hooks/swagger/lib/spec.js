"use strict";

/**
 * https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md#dataTypeFormat
 */

const types = {
  integer: {
    type: 'integer',
    format: 'int32'
  },
  float: {
    type: 'number',
    format: 'float'
  },
  double: {
    type: 'number',
    format: 'double'
  },
  string: {
    type: 'string',
    format: 'string'
  },
  binary: {
    type: 'string',
    format: 'binary'
  },
  boolean: {
    type: 'boolean'
  },
  date: {
    type: 'string',
    format: 'date'
  },
  datetime: {
    type: 'string',
    format: 'date-time'
  }
};

const typeMap = {
  text: 'string',
  json: 'string'
};

const Spec = {
  getPropertyType (wltype) {
    return types[typeMap[wltype] || wltype];
  }
};

module.exports = Spec;
