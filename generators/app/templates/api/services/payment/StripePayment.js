var Q = require('q');
var stripe = require('stripe');

/**
 * Create new Stripe payment instance
 * @param {Object} options
 * @constructor
 */
function StripePayment(options) {
  if (!(options || options.apiKey)) {
    throw new Error('You must provide apiKey');
  }

  this._stripe = stripe(options.apiKey);
}

StripePayment.prototype = Object.create({
  constructor: StripePayment,

  /**
   * To charge a credit card, you create a new charge object.
   * @param {Object} options Options https://stripe.com/docs/api/node#create_charge
   * @returns {StripePayment}
   */
  createCharge: function (options) {
    var defer = Q.defer();

    stripe.charges.create(options, function (error, charge) {
      if (error) {
        defer.reject(error);
      } else {
        defer.resolve(charge);
      }
    });

    return defer.promise;
  },

  /**
   * Retrieves the details of a charge that has previously been created.
   * @param {Object} options Options https://stripe.com/docs/api/node#retrieve_charge
   * @returns {StripePayment}
   */
  retrieveCharge: function (options) {
    var defer = Q.defer();

    stripe.charges.retrieve(options.id, function (error, charge) {
      if (error) {
        defer.reject(error);
      } else {
        defer.resolve(charge);
      }
    });

    return defer.promise;
  },

  /**
   * Create Customer
   * @param {Object} options Options https://stripe.com/docs/api/node#create_customer
   * @returns {StripePayment}
   */
  createCustomer: function (options) {
    var defer = Q.defer();

    stripe.customers.create(options, function (error, customer) {
      if (error) {
        defer.reject(error);
      } else {
        defer.resolve(customer);
      }
    });

    return defer.promise;
  },

  /**
   * Update Customer
   * @param {object} options https://stripe.com/docs/api/node#update_customer
   * @returns {StripePayment}
   */
  updateCustomer: function (options) {
    var defer = Q.defer();

    stripe.customers.update(options, function (error, customer) {
      if (error) {
        defer.reject(error);
      } else {
        defer.resolve(customer);
      }
    });

    return defer.promise;
  },

  /**
   * Delete Customer
   * @param {object} options https://stripe.com/docs/api/node#delete_customer
   * @returns {StripePayment}
   */
  customerDelete: function (options) {
    var defer = Q.defer();

    stripe.customers.del(options.id, function (error, customer) {
      if (error) {
        defer.reject(error);
      } else {
        defer.resolve(customer);
      }
    });

    return defer.promise;
  },

  /**
   * Returns a list of your customers.
   * @param {object} options https://stripe.com/docs/api/node#delete_customer
   * @returns {StripePayment}
   */
  customersList: function (options) {
    var defer = Q.defer();

    stripe.customers.list(options, function (error, customers) {
      if (error) {
        defer.reject(error);
      } else {
        defer.resolve(customers);
      }
    });

    return defer.promise;
  },

  /**
   * create a new plan
   * @param {object} options https://stripe.com/docs/api/node#create_plan
   * @returns {StripePayment}
   */
  createPlan: function (options) {
    var defer = Q.defer();

    stripe.plans.create(options, function (error, plan) {
      if (error) {
        defer.reject(error);
      } else {
        defer.resolve(plan);
      }
    });

    return defer.promise;
  },

  /**
   * Retrieves the plan with the given ID.
   * @param {object} options https://stripe.com/docs/api/node#retrieve_plan
   * @returns {StripePayment}
   */
  getPlan: function (options) {
    var defer = Q.defer();

    stripe.plans.retrieve(options.id, function (error, plan) {
      if (error) {
        defer.reject(error);
      } else {
        defer.resolve(plan);
      }
    });

    return defer.promise;
  },

  /**
   * Updates the name of a plan. Other plan details (price, interval, etc.) are, by design, not editable.
   * @param {Number} planId
   * @param {Object} options https://stripe.com/docs/api/node#update_plan
   * @returns {StripePayment}
   */
  updatePlan: function (planId, options) {
    var defer = Q.defer();

    stripe.plans.update(planId, options, function (error, plan) {
      if (error) {
        defer.reject(error);
      } else {
        defer.resolve(plan);
      }
    });

    return defer.promise;
  },

  /**
   * Returns a list of your plans
   * https://stripe.com/docs/api/node#list_plans
   * @returns {StripePayment}
   */
  listPlan: function () {
    var defer = Q.defer();

    stripe.plans.list(function (error, plans) {
      if (error) {
        defer.reject(error);
      } else {
        defer.resolve(plans);
      }
    });

    return defer.promise;
  }
});

module.exports = StripePayment;
