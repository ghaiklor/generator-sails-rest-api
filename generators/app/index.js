var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
    constructor: function () {
        var options = require('./cli-options/index');

        yeoman.generators.Base.apply(this, arguments);

        Object.keys(options).forEach(function (optionName) {
            this.option(optionName, options[optionName]);
        }.bind(this));

        this.config.save();
    },

    initializing: require('./run-steps/initializing'),
    prompting: require('./run-steps/prompting.js'),
    configuring: require('./run-steps/configuring.js'),
    writing: require('./run-steps/writing.js'),
    conflicts: require('./run-steps/conflicts.js'),
    install: require('./run-steps/install.js'),
    end: require('./run-steps/end.js')
});
