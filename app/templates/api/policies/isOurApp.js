/**
 * isOurApp
 * @description :: Policy to check if this request goes from our applications
 */

module.exports = function (req, res, next) {
    var token = req.headers["application-token"];

    if (token && token === "<%= answers.applicationHeaderToken %>") {
        next();
    } else {
        res.forbidden(null, null, "You must provide application token");
    }
};
