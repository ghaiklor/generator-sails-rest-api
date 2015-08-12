<% if (answers['services:mailer:provider']) { %>
  module.exports = require('sails-service-mailer').create("<%= answers['services:mailer:provider'] %>", {});
<% } else { %>
  module.exports = {};
<% } %>
