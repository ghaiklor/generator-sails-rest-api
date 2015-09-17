import hash from 'sails-service-hash';

export default {
  bcrypt: hash.create('bcrypt', sails.config.services.hash.bcrypt)
};
