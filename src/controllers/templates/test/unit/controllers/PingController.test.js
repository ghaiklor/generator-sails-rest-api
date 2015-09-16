var assert = require('assert');
var Promise = require('bluebird');

describe("controllers:PingController", function () {
  it("should return 'HTTP server is working'", function (done) {
    new Promise(function (resolve, reject) {
      sails.requestForTest('get', '/v1/Ping')
        .expect(200)
        .end(function (err, data) {
          if (err) return reject(err);

          return resolve(data.body);
        });
    })
      .then(function (answer) {
        assert(answer.message === 'HTTP server is working');

        done();
      })
      .catch(done)
  })
});
