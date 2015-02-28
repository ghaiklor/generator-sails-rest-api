var yeoman = require('yeoman-generator'),
    runSteps = require('./steps');

module.exports = yeoman.generators.Base.extend({
    constructor: function () {
        yeoman.generators.Base.apply(this, arguments);

        var options = require('./options'),
            args = require('./arguments');

        this.description = "Yeoman generator that provides already configured and optimized Sails REST API with bundle of predefined features";

        Object.keys(options).forEach(function (name) {
            this.option(name, options[name]);
        }.bind(this));

        Object.keys(args).forEach(function (name) {
            this.argument(name, args[name]);
        }.bind(this));

        this.config.save();
    },

    initializing: runSteps.initializing,
    prompting: runSteps.prompting,
    configuring: runSteps.configuring,
    writing: runSteps.writing,
    conflicts: runSteps.conflicts,
    install: runSteps.install,
    end: runSteps.end
});
