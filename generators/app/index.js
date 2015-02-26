var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
    constructor: function () {
        var options = require('./options/index');

        yeoman.generators.Base.apply(this, arguments);

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
