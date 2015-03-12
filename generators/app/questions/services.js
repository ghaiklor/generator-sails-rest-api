var inquirer = require('inquirer');

module.exports = [{
    type: 'checkbox',
    name: 'services:cipher',
    message: 'Choose which Cipher services you want',
    choices: [{
        name: 'bcrypt',
        checked: true
    }, {
        name: 'jwt',
        checked: true
    }, new inquirer.Separator(), {
        name: 'More Cipher is coming',
        disabled: 'Wait for it...'
    }]
}, {
    type: 'checkbox',
    name: 'services:mailer',
    message: 'Choose which Mailer services you want',
    choices: [{
        name: 'Mandrill',
        checked: false
    }, new inquirer.Separator(), {
        name: 'More Mailer is coming',
        disabled: 'Wait for it...'
    }]
}, {
    type: 'checkbox',
    name: 'services:payment',
    message: 'Choose which Payment services you want',
    choices: [{
        name: 'Stripe',
        checked: false
    }, new inquirer.Separator(), {
        name: 'More Payment is coming',
        disabled: 'Wait for it...'
    }]
}, {
    type: 'checkbox',
    name: 'services:pusher',
    message: 'Choose which Pusher services you want',
    choices: [{
        name: 'Apple Push Notification',
        checked: false
    }, {
        name: 'Google Cloud Messaging',
        checked: false
    }, new inquirer.Separator(), {
        name: 'More Pusher is coming',
        disabled: 'Wait for it...'
    }]
}, {
    type: 'checkbox',
    name: 'services:sms',
    message: 'Choose which SMS services you want',
    choices: [{
        name: 'Twilio',
        checked: false
    }, new inquirer.Separator(), {
        name: 'More SMS is coming',
        disabled: 'Wait for it...'
    }]
}, {
    type: 'checkbox',
    name: 'services:social',
    message: 'Choose which Social services you want',
    choices: [{
        name: 'Facebook',
        checked: false
    }, new inquirer.Separator(), {
        name: 'More Social is coming',
        disabled: 'Wait for it...'
    }]
}, {
    type: 'checkbox',
    name: 'services:storage',
    message: 'Choose which Storage services you want',
    choices: [{
        name: 'Amazon S3',
        checked: false
    }, {
        name: 'Google Cloud Storage',
        checked: false
    }, new inquirer.Separator(), {
        name: 'More Storage is coming',
        disabled: 'Wait for it...'
    }]
}];
