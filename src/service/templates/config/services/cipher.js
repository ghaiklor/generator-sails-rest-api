export default {
  services: {
    cipher: {
      jwt: {
        secretOrKey: '<%= options["cipher-secret-key"] %>'
      }
    }
  }
}
