<% if (answers['services:storage:provider']) { %>
  module.exports = require('sails-service-storage').create("<%= answers['services:storage:provider'] %>", sails.config.services.storage);
<% } else { %>
  module.exports = {};
<% } %>
