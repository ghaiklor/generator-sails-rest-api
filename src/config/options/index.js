/**
 * Exports object that contains names of options as a key and their configuration objects as a value
 *
 * @example
 * export default {
 *   optionName: {
 *     desc: 'Description for the option',
 *     alias: 'Short name for the option',
 *     type: Boolean || String || Number,
 *     defaults: 'Default value',
 *     hide: false
 *   }
 * };
 */

export default {
  'database-adapter': {
    desc: 'Specifies an adapter for your database',
    type: String,
    defaults: 'Mongo'
  },

  'database-host': {
    desc: 'Specifies a host of your database',
    type: String,
    defaults: 'localhost'
  },

  'database-name': {
    desc: 'Specifies a name of your database',
    type: String,
    defaults: 'sails-rest-api'
  },

  'database-username': {
    desc: 'Specifies an username of your database',
    type: String,
    defaults: ''
  },

  'database-password': {
    desc: 'Specifies a password of your database',
    type: String,
    defaults: ''
  },

  'dynamo-access-key-id': {
    desc: 'Specifies an Access Key ID for DynamoDB',
    type: String,
    defaults: ''
  },

  'dynamo-secret-access-key': {
    desc: 'Specifies a Secret Key for DynamoDB',
    type: String,
    defaults: ''
  },

  'dynamo-region': {
    desc: 'Specifies a region for DynamoDB',
    type: String,
    defaults: 'us-west-1'
  },

  'enable-cors': {
    desc: 'Enables CORS by default',
    type: Boolean,
    defaults: false
  }
};
