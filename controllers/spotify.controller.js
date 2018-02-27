const User = require('../models/user.model');
const countries = require('../lib/countries');

module.exports.index = (req, res, next) => {
  res.render('index');
};

module.exports.lyrics = (req, res, next) => {
  const user = req.user;
  if (user) {
    user.getCurrentSongs((error, currentSong) => {
      if (error) {
        next(error);
      } else {
        res.render('lyrics', {
          currentSong,
          user
        });
      }
    });
  } else {
    res.render('lyrics');
  }
};

module.exports.profile = (req, res, next) => {
  const user = req.user;
  res.render('profile', {
    user
  });
}

module.exports.update = (req, res, next) => {
  const userId = req.user.id;
  const mycountry = req.body.country.toUpperCase();
  let error = false;
  let finalcountry;

  countries.allCountries.forEach(function(element) {
    let countryValue = Object.values(element).toString().toUpperCase();
    if (Object.keys(element) == mycountry || countryValue == mycountry) {
      finalcountry = element;
    }
  });
  if (typeof(finalcountry) !== "undefined") {
    const updates = {
      name: req.body.userName,
      country: Object.values(finalcountry),
      age: req.body.age,
      language: req.body.language
    };
    User.findByIdAndUpdate(userId, updates).then((user) => {
      res.redirect('/lyrics');
    });
  } else {
    res.render('profile', {
      user: req.user,
      errorMessage: "This country is not defined in our database."
    });
  }
};
