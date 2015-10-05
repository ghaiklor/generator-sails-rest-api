import { assert } from 'chai';
import Promise from 'bluebird';

describe('controllers:UserController', function () {
  it('Should return list of users', (done) => {
    new Promise((resolve, reject) => {
      sails.requestForTest('get', '/v1/user')
        .expect(200)
        .end((error, data) => {
          if (error) return reject(error);
          return resolve(data.body);
        });
    })
      .then(answer => {
        assert.instanceOf(answer.data, Array);
        done();
      })
      .catch(done)
  })
});
