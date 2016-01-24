"use strict";

module.exports = {
  index(req, res) {
    res.status(200).jsonx(sails.hooks.swagger.doc);
  }
};
