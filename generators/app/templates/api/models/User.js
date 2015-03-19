/**
 * User
 * @description :: Model for storing users
 */

module.exports = {
    schema: true,

    attributes: {
        username: {
            type: 'string'
        },

        password: {
            type: 'string'
        },

        email: {
            type: 'string',
            notEmpty: true,
            email: true,
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
            type: 'url',
            defaultsTo: ''
        },

        facebook: {
            type: 'object'
        },

        twitter: {
            type: 'object'
        },

        yahoo: {
            type: 'object'
        },

        google: {
            type: 'object'
        },

        toJSON: function () {
            var obj = this.toObject();

            delete obj.password;

            return obj;
        }
    },

    beforeUpdate: function (values, next) {
        if (values.password) {
            values.password = CipherService.create('bcrypt', values.password).hashSync();
        }

        next();
    },

    beforeCreate: function (values, next) {
        if (values.password) {
            values.password = CipherService.create('bcrypt', values.password).hashSync();
        }

        next();
    }
};
