import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:services', function () {
  describe('Should properly handle default configuration', () => {
    this.timeout(10000);

    before(done => {
      test
        .run(path.join(__dirname, '../../src/services'))
        .on('end', done);
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/services/CipherService.js',
        'api/services/HashService.js'
      ]);

      assert.noFile([
        'api/services/ImageService.js',
        'api/services/LocationService.js',
        'api/services/MailerService.js',
        'api/services/PaymentService.js',
        'api/services/PusherService.js',
        'api/services/SmsService.js',
        'api/services/SocialService.js',
        'api/services/StorageService.js'
      ]);
    });

    it('Should properly create config files', () => {
      assert.file([
        'config/services/cipher.js',
        'config/services/hash.js'
      ]);

      assert.noFile([
        'config/services/image.js',
        'config/services/location.js',
        'config/services/mailer.js',
        'config/services/payment.js',
        'config/services/pusher.js',
        'config/services/sms.js',
        'config/services/social.js',
        'config/services/storage.js'
      ]);

      assert.fileContent('config/services/cipher.js', /secretOrKey: "[a-z0-9]{64}"/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/services/CipherService.test.js',
        'test/unit/services/HashService.test.js'
      ]);

      assert.noFile([
        'test/unit/services/ImageService.test.js',
        'test/unit/services/LocationService.test.js',
        'test/unit/services/MailerService.test.js',
        'test/unit/services/PaymentService.test.js',
        'test/unit/services/PusherService.test.js',
        'test/unit/services/SmsService.test.js',
        'test/unit/services/SocialService.test.js',
        'test/unit/services/StorageService.test.js'
      ]);
    });
  });

  describe('Should properly handle full configuration', () => {
    this.timeout(10000);

    before(done => {
      test
        .run(path.join(__dirname, '../../src/services'))
        .withOptions({
          'services': ['Cipher', 'Hash', 'Image', 'LocationService', 'Mailer', 'PaymentService', 'Pusher', 'Sms', 'Social', 'Storage'].join(','),
          'cipher-secret-key': '1234567890',
          'image-provider': 'IM',
          'location-provider': 'FreeGeoIP',
          'mailer-provider': 'SMTP',
          'payment-provider': 'BrainTree',
          'sms-provider': 'Twilio',
          'storage-provider': 'Local'
        })
        .on('end', done);
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/services/CipherService.js',
        'api/services/HashService.js',
        'api/services/ImageService.js',
        'api/services/LocationService.js',
        'api/services/MailerService.js',
        'api/services/PaymentService.js',
        'api/services/PusherService.js',
        'api/services/SmsService.js',
        'api/services/SocialService.js',
        'api/services/StorageService.js'
      ]);

      assert.fileContent('api/services/ImageService.js', /image\("IM"/);
      assert.fileContent('api/services/LocationService.js', /location\("FreeGeoIP"/);
      assert.fileContent('api/services/MailerService.js', /mailer\("SMTP"/);
      assert.fileContent('api/services/PaymentService.js', /payment\("BrainTree"/);
      assert.fileContent('api/services/SmsService.js', /sms\("Twilio"/);
      assert.fileContent('api/services/StorageService.js', /storage\("Local"/);
    });

    it('Should properly create config files', () => {
      assert.file([
        'config/services/cipher.js',
        'config/services/hash.js',
        'config/services/image.js',
        'config/services/location.js',
        'config/services/mailer.js',
        'config/services/payment.js',
        'config/services/pusher.js',
        'config/services/sms.js',
        'config/services/social.js',
        'config/services/storage.js'
      ]);

      assert.fileContent('config/services/cipher.js', /secretOrKey: "1234567890"/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/services/CipherService.test.js',
        'test/unit/services/HashService.test.js',
        'test/unit/services/ImageService.test.js',
        'test/unit/services/LocationService.test.js',
        'test/unit/services/MailerService.test.js',
        'test/unit/services/PaymentService.test.js',
        'test/unit/services/PusherService.test.js',
        'test/unit/services/SmsService.test.js',
        'test/unit/services/SocialService.test.js',
        'test/unit/services/StorageService.test.js'
      ]);
    });
  });
});
