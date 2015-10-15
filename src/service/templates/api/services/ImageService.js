import image from 'sails-service-image';

export default image("<%= options['image-provider'] %>", sails.config.services.image);
