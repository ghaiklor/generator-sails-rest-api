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
    let done = this.async();
    askQuestions.call(this, 'Application', questions.app, done);
  },

  askConfig: function () {
    let done = this.async();
    askQuestions.call(this, 'Configuration', questions.config, done);
  },

  askLogger: function () {
    let done = this.async();
    askQuestions.call(this, 'Logger', questions.logger, done);
  },

  askBlueprint: function () {
    let done = this.async();
    askQuestions.call(this, 'Blueprint', questions.blueprint, done);
  },

  askController: function () {
    let done = this.async();
    askQuestions.call(this, 'Controller', questions.controller, done);
  },

  askHook: function () {
    let done = this.async();
    askQuestions.call(this, 'Hook', questions.hook, done);
  },

  askCron: function () {
    let done = this.async();
    askQuestions.call(this, 'Cron', questions.cron, done);
  },

  askSwagger: function () {
    let done = this.async();
    askQuestions.call(this, 'Swagger', questions.swagger, done);
  },

  askAuthentication: function () {
    let done = this.async();
    askQuestions.call(this, 'Authentication', questions.authentication, done);
  },

  askService: function () {
    let done = this.async();
    askQuestions.call(this, 'Service', questions.service, done);
  }
};
