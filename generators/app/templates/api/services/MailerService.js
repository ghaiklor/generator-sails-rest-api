<% if (answers['services:mailer:provider']) { %>
  module.exports = require('sails-service-mailer').create("<%= answers['services:mailer:provider'] %>", sails.config.services.mailer);
<% } else { %>
  module.exports = {};
<% } %>
