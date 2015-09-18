import social from 'sails-service-social';

export default {
  facebook: social.create('facebook', sails.config.services.social.facebook)
};
