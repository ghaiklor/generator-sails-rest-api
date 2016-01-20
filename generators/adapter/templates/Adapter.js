/**
 * Stores a reference to each connection that gets registered with this adapter
 * @type {Object}
 */
let connections = {};

export default {
  /**
   * Set to true if this adapter supports (or requires) things like data types, validations, keys, etc
   */
  syncable: false,

  /**
   * Default configuration for connections
   */
  defaults: {},

  /**
   * This method runs when a model is initially registered at server-start-time
   * @param {Object} connection
   * @param {Array} collections
   * @param {Function} cb
   * @returns {*}
   */
  registerConnection: (connection, collections, cb) => {
    if (!connection.identity) return cb(new Error('Connection is missing an identity'));
    if (connections[connection.identity]) return cb(new Error('Connection is already registered'));

    // Add in logic here to initialize connection
    // e.g. connections[connection.identity] = new Database(connection, collections);

    connections[connection.identity] = connection;

    cb();
  },

  /**
   * Fired when a model is unregistered, typically when the server is killed
   * @param _connection
   * @param _cb
   * @returns {*}
   */
  teardown: (_connection, _cb) => {
    let connection = typeof _connection !== 'function' ? _connection : null;
    let cb = typeof _connection === 'function' ? _connection : _cb;

    if (!connection) {
      connections = {};
      return cb();
    }

    if (!connections[connection]) return cb();

    delete connections[connection];

    cb();
  },

  /**
   * Add in logic here to describe a collection (e.g. DESCRIBE TABLE logic)
   * @param {Object} connection
   * @param {Object} collection
   * @param {Function} cb
   * @returns {*}
   */
  describe: (connection, collection, cb) => {
    return cb();
  },

  /**
   * Add in logic here to create a collection (e.g. CREATE TABLE logic)
   * @param {Object} connection
   * @param {Object} collection
   * @param {Object} definition
   * @param {Function} cb
   * @returns {*}
   */
  define: (connection, collection, definition, cb) => {
    return cb();
  },

  /**
   * Add in logic here to delete a collection (e.g. DROP TABLE logic)
   * @param {Object} connection
   * @param {Object} collection
   * @param {Object} relations
   * @param {Function} cb
   * @returns {*}
   */
  drop: (connection, collection, relations, cb) => {
    return cb();
  },

  /**
   * You should implement this method to respond with an array of instances
   * @param connection
   * @param collection
   * @param options
   * @param cb
   * @returns {*}
   */
  find: (connection, collection, options, cb) => {
    return cb();
  },

  /**
   * You should implement this method to respond with an array of instances
   * @param connection
   * @param collection
   * @param values
   * @param cb
   * @returns {*}
   */
  create: (connection, collection, values, cb) => {
    return cb();
  },

  /**
   * You should implement this method to respond with an array of instances
   * @param connection
   * @param collection
   * @param options
   * @param values
   * @param cb
   * @returns {*}
   */
  update: (connection, collection, options, values, cb) => {
    return cb();
  },

  /**
   * You should implement this method to respond with an array of instances
   * @param connection
   * @param collection
   * @param options
   * @param cb
   * @returns {*}
   */
  destroy: (connection, collection, options, cb) => {
    return cb();
  }
}
