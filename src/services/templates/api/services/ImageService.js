import image from 'sails-service-image';

export default image.create("<%= options['image-provider'] %>", sails.config.services.image);
