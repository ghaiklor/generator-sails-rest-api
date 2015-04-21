/**
 * UserController
 * @description :: Server-side logic for manage users
 */

module.exports = {
  /**
   * Get last registered users in system
   * @param req
   * @param res
   */
  recently_registered: function (req, res) {
    User
      .find()
      .sort({
        createdAt: 'DESC'
      })
      .limit(5)
      .then(res.ok)
      .catch(res.serverError);
  }
};
