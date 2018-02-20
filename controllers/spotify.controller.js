const User = require('../models/user.model');

module.exports.index = (req, res, next) => {
  const user = req.user;
  if (user) {
    user.getCurrentSongs((error, currentSong) => {
      if (error) {
        next(error);
      } else {
        res.render('index', {
          currentSong
        });
      }
    });
  } else {
    res.render('index');
  }
}
