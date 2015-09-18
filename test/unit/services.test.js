import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:services', function () {
  this.timeout(10000);

  before(done => {
    test
      .run(path.join(__dirname, '../../generators/services'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .on('end', done);
  });

  it('Should properly create root files', () => {
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
      'api/services/StorageService.js',
      'config/services/cipher.js',
      'config/services/hash.js',
      'config/services/image.js',
      'config/services/location.js',
      'config/services/mailer.js',
      'config/services/payment.js',
      'config/services/pusher.js',
      'config/services/sms.js',
      'config/services/social.js',
      'config/services/storage.js',
      'test/unit/services/CipherService.js',
      'test/unit/services/HashService.js',
      'test/unit/services/ImageService.js',
      'test/unit/services/LocationService.js',
      'test/unit/services/MailerService.js',
      'test/unit/services/PaymentService.js',
      'test/unit/services/PusherService.js',
      'test/unit/services/SmsService.js',
      'test/unit/services/SocialService.js',
      'test/unit/services/StorageService.js'
    ]);
  });
});
