export default {
  services: {
    cipher: {
      jwt: {
        secretKey: '<%= options["cipher-secret-key"] %>'
      }
    }
  }
}
