"use strict";

module.exports = {
  adapter: require('./adapter'),
  app: require('./app'),
  authentication: require('./authentication'),
  blueprint: require('./blueprint'),
  config: require('./config'),
  controller: require('./controller'),
  cron: require('./cron'),
  hook: require('./hook'),
  logger: require('./logger'),
  model: require('./model'),
  policy: require('./policy'),
  response: require('./response'),
  service: require('./service'),
  swagger: require('./swagger')
};
