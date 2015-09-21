import storage from 'sails-service-storage';

export default storage.create("<%= options['storage-provider'] %>", sails.config.services.storage);
