import cipher from 'sails-service-cipher';
import config from '../../config/services/cipher'

export default {
  jwt: cipher('jwt', config.services.cipher.jwt)
}
