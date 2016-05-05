export default [
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
    when: function (responses) {
      return responses['web-engine'] == 'other'
    },
    name: 'web-engine-other',
    message: 'What is the name of this web engine?'
  },
  {
    type: 'list',
    name: 'orm-engine',
    message: 'Choose an ORM',
    choices: [
      'waterline',
      'mongoose',
      'knex',
      'bookshelf (not supported yet)',
      'sequelize (not supported yet)',
      'none',
      'other'
    ],
    defaults: 'waterline'
  },
  {
    when: function (responses) {
      return responses['orm-engine'] == 'other'
    },
    name: 'orm-engine-other',
    message: 'What is the name of this ORM ?'
  },
  {
    type: 'confirm',
    when: function (responses) {
      return responses['orm-engine'] != 'none'
    },
    name: 'footprints',
    message: 'Do you want to use Footprints (automatic REST API from models) ?'
  }
]
