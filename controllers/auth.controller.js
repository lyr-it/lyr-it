const passport = require('passport');

module.exports.logout = (req, res, next) => {
  req.logout();
  res.redirect("/");
};

module.exports.loginWithSpotifyCallback = (req, res, next) => {
  passport.authenticate('spotify', (error, user) => {
    if (error) {
      next(error);
    } else {
      req.login(user, (error) => {
        if (error) {
          res.redirect('/');
          next(error);
        } else {
          res.redirect('/lyrics');
        }
      });
    }
  })(req, res, next);
}
