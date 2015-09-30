<% if (answers['services:social:provider']) { %>
  var socials = require('sails-service-social');
  module.exports = {
    facebook: socials('facebook', {})
  };
<% } else { %>
  module.exports = {};
<% } %>
