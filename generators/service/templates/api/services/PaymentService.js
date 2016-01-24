"use strict";

const payment = require('sails-service-payment');
const config = require('../../config/services/payment');

module.exports = payment('<%= options["payment-provider"] %>', config.services.payment);
