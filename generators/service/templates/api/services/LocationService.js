import location from 'sails-service-location';
import config from '../../config/services/location';

export default location('<%= options["location-provider"] %>', config.services.location);
