/**
 * User
 * @description :: Model for storing users
 */

export default {
  schema: true,

  attributes: {
    username: {
      type: 'string',
      required: true,
      unique: true,
      alphanumericdashed: true
    },

    password: {
      type: 'string'
    },

    email: {
      type: 'email',
      required: true,
      unique: true
    },

    firstName: {
      type: 'string',
      defaultsTo: ''
    },

    lastName: {
      type: 'string',
      defaultsTo: ''
    },

    photo: {
      type: 'string',
      defaultsTo: '',
      url: true
    },

    socialProfiles: {
      type: 'object',
      defaultsTo: {}
    },

    toJSON() {
      let obj = this.toObject();

      delete obj.password;
      delete obj.socialProfiles;

      return obj;
    }
  },

  beforeUpdate(values, next) {
    if (/^\$2[aby]\$[0-9]{2}\$.{53}$/.test(values.password)) return next();

    values.password = HashService.bcrypt.hash(password).then(next).catch(next);
  },

  beforeCreate(values, next) {
    values.password = HashService.bcrypt.hash(values.password).then(next).catch(next);
  }
};
