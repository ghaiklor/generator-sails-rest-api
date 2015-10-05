import { assert } from 'chai';
import Promise from 'bluebird';

describe('controllers:PingController', () => {
  it("should return 'HTTP server is working'", done => {
    new Promise((resolve, reject) => {
      sails.requestForTest('get', '/v1/Ping')
        .expect(200)
        .end((error, data) => {
          if (error) return reject(error);
          return resolve(data.body);
        });
    })
      .then(answer => {
        assert(answer.message === 'HTTP server is working');
        done();
      })
      .catch(done)
  })
});
