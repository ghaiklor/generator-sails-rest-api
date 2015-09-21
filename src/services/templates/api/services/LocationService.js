import location from 'sails-service-location';

export default location.create("<%= options['location-provider'] %>", sails.config.services.location);
