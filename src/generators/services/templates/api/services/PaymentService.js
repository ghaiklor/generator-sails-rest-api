<% if (answers['services:payment:provider']) { %>
  module.exports = require('sails-service-payment').create("<%= answers['services:payment:provider'] %>", sails.config.services.payment);
<% } else { %>
  module.exports = {};
<% } %>
