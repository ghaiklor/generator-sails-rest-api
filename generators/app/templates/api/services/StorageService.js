<% if (answers['services:storage:provider']) { %>
  module.exports = require('sails-service-storage')("<%= answers['services:storage:provider'] %>", {});
<% } else { %>
  module.exports = {};
<% } %>
