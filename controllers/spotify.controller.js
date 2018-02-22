const User = require('../models/user.model');

module.exports.index = (req, res, next) => {
  res.render('index');
};

module.exports.lyrics = (req,res,next) => {
  const user = req.user;
  if (user) {
    user.getCurrentSongs((error, songs) => {
      if (error) {
        next(error);
      } else {
        res.render('lyrics', {
          songs
        });
      }
    });
  } else {
    res.render('lyrics');
  }
};
