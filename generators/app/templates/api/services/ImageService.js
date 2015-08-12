<% if (answers['services:image:provider']) { %>
  module.exports = require('sails-service-image').create("<%= answers['services:image:provider'] %>", {});
<% } else { %>
  module.exports = {};
<% } %>
