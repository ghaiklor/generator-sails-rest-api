import { assert } from 'chai';

describe('controllers:PingController', () => {
  it('Should return message that HTTP server is working', done => {
    sails.request({
      method: 'GET',
      url: '/v1/ping'
    }, (error, res, body) => {
      if (error) return done(error);

      assert.equal(res.statusCode, 200);
      assert.equal(body.message, 'HTTP server is working');

      done();
    });
  });
});
