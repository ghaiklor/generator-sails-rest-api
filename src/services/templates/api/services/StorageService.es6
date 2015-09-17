import storage from 'sails-service-storage';

export default storage.create("<%= answers['services:storage:provider'] %>", sails.config.services.storage);
