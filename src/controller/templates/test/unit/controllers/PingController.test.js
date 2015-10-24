import { assert } from 'chai';
import Promise from 'bluebird';
import Controller from '../../../api/controllers/PingController';

describe('controllers:PingController', () => {
  it('Should return HTTP server is working', done => {
    new Promise((resolve, reject) => {
      sails.requestForTest('get', '/v1/ping')
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
