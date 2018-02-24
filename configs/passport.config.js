const User = require('../models/user.model');
const SpotifyStrategy = require('passport-spotify').Strategy;

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID || '';
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET || '';

module.exports.setup = (passport) => {

  passport.serializeUser(function(user, next) {
    next(null, user._id);
  });

  passport.deserializeUser(function(id, next) {
    User.findById(id)
      .then(user => {
        next(null, user);
      })
      .catch(error => next(error));
  });

  passport.use('spotify', new SpotifyStrategy({
      clientID: SPOTIFY_CLIENT_ID,
      clientSecret: SPOTIFY_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/callback'
    }, (accessToken, refreshToken, profile, next) => {
      console.log(profile);
      User.findOne({'social.id': profile.id })
        .then(user => {
          if (!user) {
            const email = profile.emails ? profile.emails[0].value : null;
            user = new User({
              name: profile.username,
              email: email,
              country: profile.country,
              social: {
                id: profile.id
              },
              photos: profile.photos
            });
          }
          user.social.accessToken = accessToken;
          user.social.refreshToken = refreshToken;
          user.save()
            .then(() => {
              next(null, user);
            })
            .catch(error => next(error));
        })
        .catch(error => next(error));
    }));

}

    // function(accessToken, refreshToken, expires_in, profile, done) {
    //   // asynchronous verification, for effect...
    //   process.nextTick(function() {
    //     // To keep the example simple, the user's spotify profile is returned to
    //     // represent the logged-in user. In a typical application, you would want
    //     // to associate the spotify account with a user record in your database,
    //     // and return that user instead.
    //     return done(null, profile);
    //   });
    // }));
