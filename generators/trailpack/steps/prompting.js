module.exports = function () {
  return this.prompt([
    {
      when: responses => {
        return !this.options.packName
      },
      name: 'packName',
      type: String,
      message: 'Name of Trailpack'
    },
    {
      when: responses => {
        return this.options.new
      },
      name: 'description',
      type: String,
      message: 'Description of Trailpack',
      defaults: ''
    },
    {
      when: responses => {
        return this.options.new
      },
      name: 'githubAccount',
      type: String,
      message: 'Github Account',
      defaults: 'trailsjs'
    },
    {
      when: responses => {
        return this.options.new
      },
      type: 'list',
      name: 'type',
      message: 'Choose Trailpack Category',
      choices: [
        'misc',
        'system',
        'server',
        'datastore',
        'tool',
        'extension'
      ],
      defaults: 'misc'
    }
  ]).then(answers => {
    this.answers = Object.assign(this.answers || {}, answers)
  })
}
