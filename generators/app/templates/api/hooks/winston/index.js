var winston = require('winston'),
    mkdirp = require('mkdirp'),
    captain = require('sails/node_modules/captains-log'),
    buildShipFn = require('sails/lib/hooks/logger/ship');

module.exports = function (sails) {
    return {
        ready: false,

        initialize: function (done) {
            var sailsLogFn;

            mkdirp.sync(sails.config.log.dailyRotate.dirname);

            sails.config.log.custom = new winston.Logger({
                transports: [
                    new winston.transports.Console(sails.config.log),
                    new winston.transports.DailyRotateFile(sails.config.log.dailyRotate)
                ]
            });

            sailsLogFn = captain(sails.config.log);
            sailsLogFn.ship = buildShipFn(sails.version ? ('v' + sails.version) : '', sailsLogFn.info);
            sails.log = sailsLogFn;

            return done();
        }
    };
};
