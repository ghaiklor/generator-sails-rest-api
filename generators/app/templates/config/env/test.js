module.exports = {
  log: {
    level: "silent"
  },

  hooks: {
    grunt: false
  },

  connections: {
    test: {
      module: 'sails-memory'
    }
  },

  models: {
    connection: "test",
    migrate: 'drop'
  }
};
