import cipher from 'sails-service-cipher';

export const jwt = cipher('jwt', sails.config.services.cipher.jwt);
