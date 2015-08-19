var _ = require('lodash');
var Promise = require('bluebird');

module.exports = {
  index: function (req, res) {
    var models = [];
    if (!req.param('q')) {
      return res.badRequest(null, null, 'You should specify a "q" parameter!');
    }
    var q = req.param('q');
    if (req.param('model')) {
      var modelStr = req.param('model').toString().toLowerCase();
      if (!(modelStr in sails.models)) {
        return res.badRequest(null, null, 'Cannot find model: ' + modelStr);
      }
      models.push({name: modelStr, model: sails.models[modelStr]});
    }
    else {
      _.forEach(sails.models, function (model, modelStr) {
        models.push({name: modelStr, model: model});
      });
    }
    Promise.map(models, function (modelObj) {
      var model = modelObj.model;
      var modelStr = modelObj.name;
      var where = _.transform(model.definition, function (result, val, key) {
        result.or.push(_.set({}, key, {contains: q}));
      }, {or: []});
      return model
        .find(where)
        .then(function (queryRes) {
          var resObj = {};
          resObj[modelStr] = queryRes;
          return Promise.resolve(resObj)
        })
    })
      .then(function (searchRes) {
        return _.transform(searchRes, function (result, val) {
          result = _.merge(result, val);
        }, {});
      })
      .then(res.ok)
      .catch(res.serverError)
  }
};
