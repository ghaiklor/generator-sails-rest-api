var questions = require('./services/index');
var keys = Object.keys(questions);

module.exports = keys.reduce(function (acc, x) {
  return acc.concat(questions[x]);
}, []);
