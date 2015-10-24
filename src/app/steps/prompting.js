/**
 * Step 2
 * Where you prompt users for options (where you'd call this.prompt()).
 */

import chalk from 'chalk';
import questions from '../questions';

function askQuestions(title, questions, done) {
  this.log(chalk.yellow(`\n${title} questions:`));

  this.prompt(questions, answers => {
    this.answers = Object.assign(this.answers || {}, answers);
    done();
  });
}

export default {
  askApp: function () {
    askQuestions.call(this, 'Application', questions.app, this.async());
  },

  askConfig: function () {
    askQuestions.call(this, 'Configuration', questions.config, this.async());
  },

  askLogger: function () {
    askQuestions.call(this, 'Logger', questions.logger, this.async());
  },

  askBlueprint: function () {
    askQuestions.call(this, 'Blueprint', questions.blueprint, this.async());
  },

  askController: function () {
    askQuestions.call(this, 'Controller', questions.controller, this.async());
  },

  askHook: function () {
    askQuestions.call(this, 'Hook', questions.hook, this.async());
  },

  askCron: function () {
    askQuestions.call(this, 'Cron', questions.cron, this.async());
  },

  askSwagger: function () {
    askQuestions.call(this, 'Swagger', questions.swagger, this.async());
  },

  askAuthentication: function () {
    askQuestions.call(this, 'Authentication', questions.authentication, this.async());
  },

  askService: function () {
    askQuestions.call(this, 'Service', questions.service, this.async());
  }
};
