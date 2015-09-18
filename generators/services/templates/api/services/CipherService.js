import cipher from 'sails-service-cipher';

export default {
  jwt: cipher.create('jwt', sails.config.services.cipher.jwt)
}
