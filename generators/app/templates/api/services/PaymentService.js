<% if (answers['services:payment:provider']) { %>
  module.exports = require('sails-service-payment')("<%= answers['services:payment:provider'] %>", {});
<% } else { %>
  module.exports = {};
<% } %>
