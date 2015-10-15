import location from 'sails-service-location';

export default location("<%= options['location-provider'] %>", sails.config.services.location);
