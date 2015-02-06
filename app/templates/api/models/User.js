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

        toJSON: function () {
            var obj = this.toObject();

            delete obj.password;

            return obj;
        }
    },

    beforeValidate: function (values, next) {
        // TODO: maybe here we need put duplicate checking
    },

    beforeUpdate: function (values, next) {
        if (values.password) {
            // TODO: make with new cipher
            values.password = CipherService.create('bcrypt', {content: values.password}).hashSync();
        }

        next();
    },

    beforeCreate: function (values, next) {
        if (values.password) {
            // TODO: make with new cipher
            values.password = CipherService.create('bcrypt', {content: values.password}).hashSync();
        }

        next();
    }
};
