import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:service', () => {
  describe('Should properly scaffold services without any options or arguments', () => {
    before(done => test.run(path.join(__dirname, '../../src/service')).on('end', done));

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

      assert.fileContent('api/services/CipherService.js', /import cipher from 'sails-service-cipher'/);
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

      assert.fileContent('config/services/cipher.js', /secretKey: 'DEFAULT_SECRET_KEY'/);
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

      assert.fileContent('test/unit/services/CipherService.test.js', /import CipherService from '\.\.\/\.\.\/\.\.\/api\/services\/CipherService';/)
    });
  });

  describe('Should properly scaffold predefined service', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/service'))
        .withArguments(['cipher'])
        .on('end', done)
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/services/CipherService.js'
      ]);

      assert.noFile([
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

      assert.fileContent('api/services/CipherService.js', /import cipher from 'sails-service-cipher'/);
    });

    it('Should properly create config files', () => {
      assert.file([
        'config/services/cipher.js'
      ]);

      assert.noFile([
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

      assert.fileContent('config/services/cipher.js', /secretKey: 'DEFAULT_SECRET_KEY'/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/services/CipherService.test.js'
      ]);

      assert.noFile([
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

      assert.fileContent('test/unit/services/CipherService.test.js', /import CipherService from '\.\.\/\.\.\/\.\.\/api\/services\/CipherService';/)
    });
  });

  describe('Should properly scaffold overridden predefined service', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/service'))
        .withArguments(['cipher'])
        .withOptions({
          'new': true
        })
        .on('end', done)
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/services/CipherService.js'
      ]);

      assert.noFile([
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

      assert.fileContent('api/services/CipherService.js', /export default \{\}/);
    });

    it('Should properly create config files', () => {
      assert.file([
        'config/services/cipher.js'
      ]);

      assert.noFile([
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

      assert.fileContent('config/services/cipher.js', /cipher: \{\}/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/services/CipherService.test.js'
      ]);

      assert.noFile([
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

      assert.fileContent('test/unit/services/CipherService.test.js', /import Service from '\.\.\/\.\.\/\.\.\/api\/services\/CipherService';/)
    });
  });

  describe('Should properly scaffold custom service', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/service'))
        .withArguments(['CustomService'])
        .on('end', done)
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/services/CustomService.js'
      ]);

      assert.noFile([
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

      assert.fileContent('api/services/CustomService.js', /export default \{\}/);
    });

    it('Should properly create config files', () => {
      assert.file([
        'config/services/custom.js'
      ]);

      assert.noFile([
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

      assert.fileContent('config/services/custom.js', /custom: \{\}/);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/services/CustomService.test.js'
      ]);

      assert.noFile([
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

      assert.fileContent('test/unit/services/CustomService.test.js', /import Service from '\.\.\/\.\.\/\.\.\/api\/services\/CustomService';/)
    });
  });

  describe('Should properly scaffold all predefined services at once', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/service'))
        .withOptions({
          'all': true
        })
        .on('end', done)
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

      assert.fileContent('api/services/CipherService.js', /import cipher from 'sails-service-cipher'/);
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

      assert.fileContent('config/services/cipher.js', /secretKey: 'DEFAULT_SECRET_KEY'/);
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

      assert.fileContent('test/unit/services/CipherService.test.js', /import CipherService from '\.\.\/\.\.\/\.\.\/api\/services\/CipherService';/)
    });
  });

  describe('Should properly scaffolds all predefined services with custom options', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/service'))
        .withOptions({
          'cipher-secret-key': '1234567890',
          'image-provider': 'IM',
          'location-provider': 'FreeGeoIP',
          'mailer-provider': 'SMTP',
          'payment-provider': 'BrainTree',
          'sms-provider': 'Twilio',
          'storage-provider': 'Local',
          'all': true
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

      assert.fileContent('api/services/ImageService.js', /image\('IM'/);
      assert.fileContent('api/services/LocationService.js', /location\('FreeGeoIP'/);
      assert.fileContent('api/services/MailerService.js', /mailer\('SMTP'/);
      assert.fileContent('api/services/PaymentService.js', /payment\('BrainTree'/);
      assert.fileContent('api/services/SmsService.js', /sms\('Twilio'/);
      assert.fileContent('api/services/StorageService.js', /storage\('Local'/);
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

      assert.fileContent('config/services/cipher.js', /secretKey: '1234567890'/);
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
