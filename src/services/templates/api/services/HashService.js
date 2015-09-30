import hash from 'sails-service-hash';

export default {
  bcrypt: hash('bcrypt', sails.config.services.hash.bcrypt)
};
