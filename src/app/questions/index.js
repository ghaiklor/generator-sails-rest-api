export default [
  {
    type: 'list',
    name: 'web-engine',
    message: 'Choose a Web Server',
    choices: [
      'hapi',
      'express4 (not supported yet)',
      'koa (not supported yet)',
      'restify (not supported yet)',
      'other'
    ],
    defaults: 'hapi'
  },
  {
    when: function (responses) {
      return responses['web-engine'] == 'other';
    },
    name: 'web-engine-other',
    message: 'What is the name of this web engine?'
  }

]
