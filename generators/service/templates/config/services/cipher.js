"use strict";

module.exports = {
  services: {
    cipher: {
      jwt: {
        secretKey: '<%= options["cipher-secret-key"] %>'
      }
    }
  }
};
