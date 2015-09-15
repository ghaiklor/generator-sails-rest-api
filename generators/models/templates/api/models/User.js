/**
 * User
 * @description :: Model for storing users
 */

module.exports = {
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

    toJSON: function () {
      var obj = this.toObject();

      delete obj.password;
      delete obj.socialProfiles;

      return obj;
    }
  },

  beforeUpdate: function (values, next) {
    var id = values.id;
    var password = values.password;

    if (id && password) {
      return User
        .findOne({id: id})
        .then(function (user) {
          if (password === user.password) {
            return next();
          } else {
            values.password = HashService.bcrypt.hashSync(password);
            return next();
          }
        })
        .catch(next);
    } else {
      next();
    }
  },

  beforeCreate: function (values, next) {
    values.password = HashService.bcrypt.hashSync(values.password);
    next();
  }
};
