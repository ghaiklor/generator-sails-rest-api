import cipher from 'sails-service-cipher';

export default {
  jwt: cipher('jwt', sails.config.services.cipher.jwt)
}
