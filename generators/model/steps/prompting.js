module.exports = {
  askModel () {
    return this.prompt([
      {
        type: 'input',
        name: 'desc',
        message: 'Model Description',
        default: 'TODO document this Model'
      },
      {
        type: 'input',
        name: 'desc',
        message: 'Parent Resolver',
        default: 'Resolver'
      }
    ]).then(answers => {
      this.answers = Object.assign(this.answers || {}, answers)
    })
  }
}
