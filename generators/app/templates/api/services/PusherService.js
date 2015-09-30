<% if (answers['services:pusher:provider']) { %>
  var pushes = require('sails-service-pusher');
  module.exports = {
    android: pushes('android', {}),
    ios: pushes('ios', {})
  };
<% } else { %>
  module.exports = {};
<% } %>
