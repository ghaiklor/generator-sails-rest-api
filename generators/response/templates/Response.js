"use strict";

module.exports = data => {
  const response = data;

  this.res.status(200);
  this.res.jsonx(response);
};
