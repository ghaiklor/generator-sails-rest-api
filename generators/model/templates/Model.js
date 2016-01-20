/**
 * <%= name %>
 * @description :: Model for storing <%= name %> records
 */

export default {
  schema: true,

  attributes: {
    // Fill your attributes here

    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};
