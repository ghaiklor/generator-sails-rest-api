import { assert } from 'chai';
import sinon from 'sinon';
import isAuthenticated from '../../../api/policies/isAuthenticated';
import { jwt } from '../../../api/services/CipherService';

const req = {headers: {authorization: `Bearer ${jwt.encodeSync({id: 2})}`}};
const reqFail = {headers: {authorization: `Bearer 1234567890`}};
const res = {negotiate: sinon.spy()};

describe('policies:isAuthenticated', () => {
  it('Should call next() callback', done => {
    isAuthenticated(req, res, () => {
      assert.notOk(res.negotiate.called);
      assert.isObject(req.user);

      res.negotiate.restore();

      done();
    });
  });
});
