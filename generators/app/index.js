var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
    constructor: function () {
        yeoman.generators.Base.apply(this, arguments);

        var options = require('./options/index');

        this.description = "Yeoman generator that provides already configured and optimized Sails REST API with bundle of predefined features";

        Object.keys(options).forEach(function (name) {
            this.option(name, options[name]);
        }.bind(this));

        this.config.save();
    },

    initializing: require('./steps/initializing'),
    prompting: require('./steps/prompting'),
    configuring: require('./steps/configuring'),
    writing: require('./steps/writing'),
    conflicts: require('./steps/conflicts'),
    install: require('./steps/install'),
    end: require('./steps/end')
});
