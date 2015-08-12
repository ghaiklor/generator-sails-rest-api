<% if (answers['services:sms:provider']) { %>
  module.exports = require('sails-service-sms').create("<%= answers['services:sms:provider'] %>", {});
<% } else { %>
  module.exports = {};
<% } %>
