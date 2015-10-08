/**
 * Connections API Configuration
 *
 * Connections are like "saved settings" for your adapters.
 * Each model must have a `connection` property (a string) which is references the name of one
 * of these connections.  If it doesn't, the default `connection` configured in `config/models.js`
 * will be applied.  Of course, a connection can (and usually is) shared by multiple models.
 *
 * NOTE: If you're using version control, you should put your passwords/api keys
 * in `config/local.js`, environment variables, or use another strategy.
 */

export default {
  connections: {
    /**
     * MongoDB configuration
     * @type {Object}
     */
    mongo: {
      adapter: 'sails-mongo',
      host: '<%= options["database-host"] %>',
      port: 27017,
      user: '<%= options["database-username"] %>',
      password: '<%= options["database-password"] %>',
      database: '<%= options["database-name"] %>'
    },

    /**
     * Redis configuration
     * @type {Object}
     */
    redis: {
      adapter: 'sails-redis',
      port: 6379,
      host: '<%= options["database-host"] %>',
      password: '<%= options["database-password"] %>',
      database: '<%= options["database-name"] %>',
      options: {
        parser: 'hiredis',
        return_buffers: false,
        detect_buffers: false,
        socket_nodelay: true,
        no_ready_check: false,
        enable_offline_queue: true
      }
    },

    /**
     * PostgreSQL configuration
     * @type {Object}
     */
    postgresql: {
      adapter: 'sails-postgresql',
      database: '<%= options["database-name"] %>',
      host: '<%= options["database-host"] %>',
      user: '<%= options["database-username"] %>',
      password: '<%= options["database-password"] %>',
      port: 5432,
      pool: false,
      ssl: false
    },

    /**
     * MySQL configuration
     * @type {Object}
     */
    mysql: {
      adapter: 'sails-mysql',
      host: '<%= options["database-host"] %>',
      port: 3306,
      user: '<%= options["database-username"] %>',
      password: '<%= options["database-password"] %>',
      database: '<%= options["database-name"] %>',
      charset: 'utf8',
      collation: 'utf8_swedish_ci'
    },

    /**
     * Microsoft SQL Server configuration
     * @type {Object}
     */
    sqlserver: {
      adapter: 'sails-sqlserver',
      user: '<%= options["database-username"] %>',
      password: '<%= options["database-password"] %>',
      host: '<%= options["database-host"] %>',
      database: '<%= options["database-name"] %>',
      options: {
        encrypt: false
      }
    },

    /**
     * OrientDB configuration
     * @type {Object}
     */
    orientdb: {
      adapter: 'sails-orientdb',
      host: '<%= options["database-host"] %>',
      port: 2424,
      user: '<%= options["database-username"] %>',
      password: '<%= options["database-password"] %>',
      database: '<%= options["database-name"] %>',
      options: {
        databaseType: 'graph',
        storage: 'plocal',
        transport: 'binary',
        decodeURIComponent: true,
        removeCircularReferences: false,
        unsafeDrop: false,
        parameterized: true,
        fetchPlanLevel: 1
      }
    },

    /**
     * DynamoDB configuration
     * @type {Object}
     */
    dynamodb: {
      adapter: 'sails-dynamodb',
      accessKeyId: '<%= options["dynamo-access-key-id"] %>',
      secretAccessKey: '<%= options["dynamo-secret-access-key"] %>',
      region: '<%= options["dynamo-region"] %>'
    },

    /**
     * FileMaker configuration
     * @type {Object}
     */
    filemaker: {
      adapter: 'sails-filemaker',
      host: '<%= options["database-host"] %>',
      database: '<%= options["database-name"] %>',
      userName: '<%= options["database-username"] %>',
      password: '<%= options["database-password"] %>'
    },

    /**
     * Memory configuration
     * ONLY FOR DEVELOPMENT
     * @type {Object}
     */
    memory: {
      adapter: 'sails-memory'
    },

    /**
     * Disk configuration
     * ONLY FOR DEVELOPMENT
     * @type {Object}
     */
    disk: {
      adapter: 'sails-disk'
    }
  }
}
