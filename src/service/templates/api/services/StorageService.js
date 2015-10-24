import storage from 'sails-service-storage';

export default storage('<%= options["storage-provider"] %>', sails.config.services.storage);
