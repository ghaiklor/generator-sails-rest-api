<% if (answers['services:mailer:provider']) { %>
  module.exports = require('sails-service-mailer')("<%= answers['services:mailer:provider'] %>", {});
<% } else { %>
  module.exports = {};
<% } %>
