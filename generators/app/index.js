var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
    constructor: function () {
        var options = require('./yo-options/index');

        yeoman.generators.Base.apply(this, arguments);

        Object.keys(options).forEach(function (name) {
            this.option(name, options[name]);
        }.bind(this));

        this.config.save();
    },

    initializing: require('./yo-steps/initializing'),
    prompting: require('./yo-steps/prompting'),
    configuring: require('./yo-steps/configuring'),
    writing: require('./yo-steps/writing'),
    conflicts: require('./yo-steps/conflicts'),
    install: require('./yo-steps/install'),
    end: require('./yo-steps/end')
});
