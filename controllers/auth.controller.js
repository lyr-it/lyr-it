const passport = require('passport');

module.exports.logout = (req, res, next) => {
  req.session.destroy(error => {
    if (error) {
        next(error);
    } else {
        req.logout();
        res.redirect("/");
    }
});
}