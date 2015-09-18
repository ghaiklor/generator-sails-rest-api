import { assert } from 'chai';
import Promise from 'bluebird';

describe("controllers:UserController", function () {
  it('Should return list of users', function (done) {
    new Promise(function (resolve, reject) {
      sails.requestForTest('get', '/v1/user')
        .expect(200)
        .end(function (err, data) {
          if (err) return reject(err);

          return resolve(data.body);
        });
    })
      .then(function (answer) {
        assert.instanceOf(answer.data, Array);

        done();
      })
      .catch(done)
  })
});
