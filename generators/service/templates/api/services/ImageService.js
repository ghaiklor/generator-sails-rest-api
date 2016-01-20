import image from 'sails-service-image';
import config from '../../config/services/image';

export default image('<%= options["image-provider"] %>', config.services.image);
