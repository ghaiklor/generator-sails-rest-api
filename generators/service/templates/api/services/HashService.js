import hash from 'sails-service-hash';
import config from '../../config/services/hash';

export default {
  bcrypt: hash('bcrypt', config.services.hash.bcrypt)
}
