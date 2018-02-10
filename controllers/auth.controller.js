const passport = require('passport');

// module.exports.login = (req, res, next) => {
//   passport.authenticate('spotify', {scope: ['user-read-email', 'user-read-private'], showDialog: true}),
//   function(req, res){
//   // The request will be redirected to spotify for authentication, so this
//   // function will not be called.
//   }
// }

module.exports.loginCallback = (req, res, next) => {
  passport.authenticate('spotify', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
}