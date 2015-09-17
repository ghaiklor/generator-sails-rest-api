import image from 'sails-service-image';

export default image.create("<%= answers['services:image:provider'] %>", sails.config.services.image);
