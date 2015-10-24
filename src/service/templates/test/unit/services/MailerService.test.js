import { assert } from 'chai';
import MailerService from '../../../api/services/MailerService';

describe('services:MailerService', () => {
  it('Should properly export', () => {
    assert.isObject(MailerService);
  });
});
