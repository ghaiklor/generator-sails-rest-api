import social from 'sails-service-social';

export default {
  facebook: social('facebook', sails.config.services.social.facebook)
};
