<% if (answers['services:location:provider']) { %>
  module.exports = require('sails-service-location')("<%= answers['services:location:provider'] %>", {});
<% } else { %>
  module.exports = {};
<% } %>
