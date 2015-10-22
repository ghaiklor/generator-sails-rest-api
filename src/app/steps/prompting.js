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
  //askAdapter: function () {
  //  let done = this.async();
  //  askQuestions.call(this, 'Adapter', questions.adapter, done);
  //},

  askApp: function () {
    let done = this.async();
    askQuestions.call(this, 'Application', questions.app, done);
  },

  askAuthentication: function () {
    let done = this.async();
    askQuestions.call(this, 'Authentication', questions.authentication, done);
  },

  askBlueprint: function () {
    let done = this.async();
    askQuestions.call(this, 'Blueprint', questions.blueprint, done);
  },

  askConfig: function () {
    let done = this.async();
    askQuestions.call(this, 'Configuration', questions.config, done);
  },

  askController: function () {
    let done = this.async();
    askQuestions.call(this, 'Controller', questions.controller, done);
  },

  askCron: function () {
    let done = this.async();
    askQuestions.call(this, 'Cron', questions.cron, done);
  },

  askHook: function () {
    let done = this.async();
    askQuestions.call(this, 'Hook', questions.hook, done);
  },

  askLogger: function () {
    let done = this.async();
    askQuestions.call(this, 'Logger', questions.logger, done);
  },

  //askModel: function () {
  //  let done = this.async();
  //  askQuestions.call(this, 'Model', questions.model, done);
  //},

  //askPolicy: function () {
  //  let done = this.async();
  //  askQuestions.call(this, 'Policy', questions.policy, done);
  //},

  //askResponse: function () {
  //  let done = this.async();
  //  askQuestions.call(this, 'Response', questions.response, done);
  //},

  askService: function () {
    let done = this.async();
    askQuestions.call(this, 'Service', questions.service, done);
  },

  askSwagger: function () {
    let done = this.async();
    askQuestions.call(this, 'Swagger', questions.swagger, done);
  }
};
