import hash from 'sails-service-hash';

export const bcrypt = hash('bcrypt', sails.config.services.hash.bcrypt);
