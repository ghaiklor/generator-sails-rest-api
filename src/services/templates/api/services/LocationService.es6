import location from 'sails-service-location';

export default location.create("<%= answers['services:location:provider'] %>", sails.config.services.location);
