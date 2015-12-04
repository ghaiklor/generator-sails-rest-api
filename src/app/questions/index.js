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
  }
]
