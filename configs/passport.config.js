const SpotifyStrategy = require('passport-spotify').Strategy;

module.exports.setup = (passport) => {
  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

  // passport.serializeUser((user, next) => {
  //   next(null, user._id);
  // });

  // passport.deserializeUser((id, next) => {
  //   User.findById(id)
  //     .then(user => {
  //       next(null, user);
  //     })
  //     .catch(error => next(error));
  // });

  // passport.use('local-auth', new LocalStrategy({
  //   usernameField: 'email',
  //   passwordField: 'password'
  // }, (email, password, next) => {
  //   User.findOne({ email: email })
  //     .then(user => {
  //       if (!user) {
  //         next(null, user, { password: 'Invalid email or password' });
  //       } else {
  //         user.checkPassword(password)
  //           .then(match => {
  //             if (match) {
  //               next(null, user);
  //             } else {
  //               next(null, null, { password: 'Invalid email or password' });
  //             }
  //           })
  //           .catch(error => next(error));
  //       }
  //     })
  //     .catch(error => next(error));
  // }));

  passport.use('spotify', new SpotifyStrategy({
    clientID: '84b62f22773541db8be1bf34cf81d41d',
    clientSecret: '93eab8f56e034e6fa034a12f57be1edc',
    callbackURL: 'http://localhost:3000/callback'
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(function () {
        // To keep the example simple, the user's spotify profile is returned to
        // represent the logged-in user. In a typical application, you would want
        // to associate the spotify account with a user record in your database,
        // and return that user instead.
        return done(null, profile);
      });
    }));
}