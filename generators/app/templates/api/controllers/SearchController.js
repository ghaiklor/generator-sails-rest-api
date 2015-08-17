function genWhereCriteria(Model, q) {
  var orObj = [];
  var attributes = Object.keys(Model.definition);
  attributes.forEach(function (attr) {
    var obj = {};
    obj[attr] = {contains: q};
    orObj.push(obj);
  });
  return {or: orObj};
}


module.exports = {
  index: function (req, res) {
    var modelStr = req.param('model').toString().toLowerCase();
    var Model = sails.models[modelStr];
    var q = req.param('q');
    var where = genWhereCriteria(Model, q);
    Model.find()
      .where(where)
      .then(res.ok)
      .catch(res.serverError);
  }
};
