/**
 * UserController
 * @description :: Server-side logic for manage users
 */

module.exports = {
    /**
     * Get Facebook friends
     */
    facebookFriends: function (req, res) {
        var accessToken = req.param('accessToken');

        SocialService.create('facebook', {
            userId: req.user.facebook && req.user.facebook.id,
            accessToken: accessToken
        }).getFriends().then(function (friends) {
            User
                .find()
                .where({
                    'facebook.id': friends.map(function (item) {
                        return item.id;
                    })
                })
                .exec(function (error, users) {
                    if (error) {
                        sails.log.error(error);
                        res.serverError(error);
                    } else {
                        res.ok(users);
                    }
                });
        }).fail(function (error) {
            sails.log.error(error);
            res.serverError(error);
        }).done();
    }
};
