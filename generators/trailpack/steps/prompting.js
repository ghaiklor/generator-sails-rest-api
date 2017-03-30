module.exports = function () {
  return this.prompt([
    {
      when: responses => {
        return responses['new'] === true
      },
      type: 'list',
      name: 'type',
      message: 'Choose Trailpack Category',
      choices: [
        'system',
        'server',
        'datastore',
        'tool',
        'extension',
        'misc'
      ],
      defaults: 'misc'
    }
  ]).then(answers => {
    this.answers = Object.assign(this.answers || {}, answers)
  })
}
