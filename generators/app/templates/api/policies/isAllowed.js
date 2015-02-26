/**
 * isAllowed
 * @description :: Policy to check if this request goes from our applications
 */

module.exports = function (req, res, next) {
    var token = req.headers["application-token"];

    if (token && token === "<%= answers['application:api-secret-key'] %>") {
        next();
    } else {
        res.unauthorized(null, null, "You must provide application token");
    }
};
