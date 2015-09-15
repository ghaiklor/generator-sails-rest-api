module.exports.services = {
  cipher: {
    jwt: {
      secretKey: "<%= answers['application:secret'] %>"
    }
  }
};
