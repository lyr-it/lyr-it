const passport = require('passport');

module.exports.logout = (req, res, next) => {
        req.logout();
        res.redirect("/");
};
