<% if (answers['services:sms:provider']) { %>
  module.exports = require('sails-service-sms').create("<%= answers['services:sms:provider'] %>", sails.config.services.sms);
<% } else { %>
  module.exports = {};
<% } %>
