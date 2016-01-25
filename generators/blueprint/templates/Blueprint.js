"use strict";

const _ = require('lodash');
const actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

module.exports = (req, res) => {
  const Model = actionUtil.parseModel(req);

  res.ok();
};
