/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const FILES_MAP = {
  CipherService: ['api/services/CipherService.es6', 'config/services/cipher.es6', 'test/unit/services/CipherService.test.es6'],
  HashService: ['api/services/HashService.es6', 'config/services/hash.es6', 'test/unit/services/HashService.test.es6'],
  ImageService: ['api/services/ImageService.es6', 'config/services/image.es6', 'test/unit/services/ImageService.test.es6'],
  LocationService: ['api/services/LocationService.es6', 'config/services/location.es6', 'test/unit/services/LocationService.test.es6'],
  MailerService: ['api/services/MailerService.es6', 'config/services/mailer.es6', 'test/unit/services/MailerService.test.es6'],
  PaymentService: ['api/services/PaymentService.es6', 'config/services/payment.es6', 'test/unit/services/PaymentService.test.es6'],
  PusherService: ['api/services/PusherService.es6', 'config/services/pusher.es6', 'test/unit/services/PusherService.test.es6'],
  SmsService: ['api/services/SmsService.es6', 'config/services/sms.es6', 'test/unit/services/SmsService.test.es6'],
  SocialService: ['api/services/SocialService.es6', 'config/services/social.es6', 'test/unit/services/SocialService.test.es6'],
  StorageService: ['api/services/StorageService.es6', 'config/services/storage.es6', 'test/unit/services/StorageService.test.es6'],
};

export default function () {
  this.answers['services:chosen'].forEach((name) => {
    FILES_MAP[name].forEach((path) => this.copy(path, path));
  });
};
