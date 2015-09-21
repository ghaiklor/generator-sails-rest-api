/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const FILES_MAP = {
  CipherService: ['api/services/CipherService.js', 'config/services/cipher.js', 'test/unit/services/CipherService.test.js'],
  HashService: ['api/services/HashService.js', 'config/services/hash.js', 'test/unit/services/HashService.test.js'],
  ImageService: ['api/services/ImageService.js', 'config/services/image.js', 'test/unit/services/ImageService.test.js'],
  LocationService: ['api/services/LocationService.js', 'config/services/location.js', 'test/unit/services/LocationService.test.js'],
  MailerService: ['api/services/MailerService.js', 'config/services/mailer.js', 'test/unit/services/MailerService.test.js'],
  PaymentService: ['api/services/PaymentService.js', 'config/services/payment.js', 'test/unit/services/PaymentService.test.js'],
  PusherService: ['api/services/PusherService.js', 'config/services/pusher.js', 'test/unit/services/PusherService.test.js'],
  SmsService: ['api/services/SmsService.js', 'config/services/sms.js', 'test/unit/services/SmsService.test.js'],
  SocialService: ['api/services/SocialService.js', 'config/services/social.js', 'test/unit/services/SocialService.test.js'],
  StorageService: ['api/services/StorageService.js', 'config/services/storage.js', 'test/unit/services/StorageService.test.js']
};

export default function () {
  this.options['services'].split(',').forEach(service => FILES_MAP[service].forEach(path => this.copy(path, path)));
};
