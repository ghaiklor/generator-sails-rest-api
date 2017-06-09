module.exports = {
  askModel () {
    return this.prompt([
      {
        type: 'input',
        name: 'desc',
        message: 'Controller Description',
        default: 'TODO document this Controller'
      }
    ]).then(answers => {
      this.answers = Object.assign(this.answers || {}, answers)
    })
  }
}
