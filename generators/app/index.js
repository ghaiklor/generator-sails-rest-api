var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
    constructor: function () {
        var options = require('./yo-options/index');

        yeoman.generators.Base.apply(this, arguments);

        Object.keys(options).forEach(function (optionName) {
            this.option(optionName, options[optionName]);
        }.bind(this));

        this.config.save();
    },

    initializing: require('./yo-steps/initializing'),
    prompting: require('./yo-steps/prompting.js'),
    configuring: require('./yo-steps/configuring.js'),
    writing: require('./yo-steps/writing.js'),
    conflicts: require('./yo-steps/conflicts.js'),
    install: require('./yo-steps/install.js'),
    end: require('./yo-steps/end.js')
});
