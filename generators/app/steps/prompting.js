module.exports = function () {
  return this.prompt([
    {
      type: 'list',
      name: 'web-engine',
      message: 'Which Web Server will your Application use?',
      choices: [
        'hapi',
        'express',
        'other'
      ],
      defaults: 'hapi'
    },
    {
      type: 'list',
      when: responses => {
        return responses['web-engine'] === 'express'
      },
      name: 'express-version',
      message: 'What express version do you want to use ?',
      choices: [
        '4',
        '5',
        'other'
      ],
    },
    {
      when: responses => {
        return responses['express-version'] === 'other'
      },
      name: 'express-version-other',
      message: 'What express version do you want to use (example 4.13.3) ?'
    },
    {
      type: 'list',
      name: 'logger',
      message: 'Choose a Logging Library',
      choices: [
        'winston',
        'other'
      ],
      defaults: 'winston'
    },
    {
      type: 'list',
      name: 'orm-engine',
      message: 'Which ORM will your Application use?',
      choices: [
        'none',
        'knex',
        'sequelize',
        'mongoose',
        'bookshelf',
        'waterline',
        'other'
      ],
      defaults: 'none'
    },
    {
      type: 'confirm',
      when: responses => {
        return responses['orm-engine'] !== 'none'
      },
      name: 'footprints',
      message: 'Do you want to use Footprints (automatic REST API from models) ?'
    }
  ]).then(answers => {
    this.answers = Object.assign(this.answers || { }, answers)
  })
}
