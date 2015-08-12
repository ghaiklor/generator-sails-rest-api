<% if (answers['services:social:provider']) { %>
  var socials = require('sails-service-social');
  module.exports = {
    facebook: socials.create('facebook', {})
  };
<% } else { %>
  module.exports = {};
<% } %>
