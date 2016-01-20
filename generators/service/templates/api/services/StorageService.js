import storage from 'sails-service-storage';
import config from '../../config/services/storage';

export default storage('<%= options["storage-provider"] %>', config.services.storage);
