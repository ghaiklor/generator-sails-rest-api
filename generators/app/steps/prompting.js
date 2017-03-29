/**
 * Step 2
 * Where you prompt users for options (where you'd call this.prompt()).
 */

module.exports = function () {
  return this.prompt([
    {
      type: 'list',
      name: 'web-engine',
      message: 'Choose a Web Server',
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
        return responses['web-engine'] == 'express'
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
        return responses['express-version'] == 'other'
      },
      name: 'express-version-other',
      message: 'What express version do you want to use (example 4.13.3) ?'
    },
    {
      type: 'list',
      name: 'orm-engine',
      message: 'Choose an ORM',
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
      when: responses => {
        return responses['orm-engine'] == 'other'
      },
      name: 'orm-engine-other',
      message: 'What is the name of this ORM ?'
    },
    {
      type: 'confirm',
      when: responses => {
        return responses['orm-engine'] != 'none'
      },
      name: 'footprints',
      message: 'Do you want to use Footprints (automatic REST API from models) ?'
    }
  ]).then(answers => {
    this.answers = Object.assign(this.answers || { }, answers)
  })
}
