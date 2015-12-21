export default [
  {
    type: 'list',
    name: 'web-engine',
    message: 'Choose a Web Server',
    choices: [
      'hapi',
      'express4',
      'koa',
      'restify'
    ],
    defaults: 'hapi'
  },
  {
    type: 'list',
    name: 'template-engine',
    message: 'Choose a Template Engine',
    choices: [
      'jade',
      'handlebars'
    ],
    defaults: 'jade'
  }
]
