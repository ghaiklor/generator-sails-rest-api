import social from 'sails-service-social';
import config from '../../config/services/social';

export default {
  facebook: social('facebook', config.services.social.facebook)
}
