module.exports = [
  {
    type: 'list',
    name: 'web-engine',
    message: 'Choose a Web Server',
    choices: [
      'hapi',
      'express',
      'koa (not supported yet)',
      'restify (not supported yet)',
      'other'
    ],
    defaults: 'hapi'
  },
  {
    when: responses => {
      return responses['web-engine'] == 'other'
    },
    name: 'web-engine-other',
    message: 'What is the name of this web engine?'
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
      'waterline',
      'mongoose',
      'knex',
      'sequelize',
      'bookshelf',
      'none',
      'other'
    ],
    defaults: 'waterline'
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
]
