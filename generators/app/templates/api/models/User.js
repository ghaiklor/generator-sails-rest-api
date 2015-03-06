/**
 * User
 * @description :: Model for storing users
 */

module.exports = {
    schema: true,

    attributes: {
        username: {
            type: 'string',
            notEmpty: true,
            unique: true
        },

        password: {
            type: 'string',
            notEmpty: true
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

        gender: {
            type: 'string',
            enum: ['MALE', 'FEMALE']
        },

        photo: {
            type: 'url',
            defaultsTo: ''
        },

        phoneNumber: {
            type: 'string',
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
