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

module.exports.profile = (req, res, next) => {
  const user = req.user;
  console.log(user.id)
  res.render('profile',{
    user
  });
}

module.exports.update = (req, res, next) => {
  const userId = req.user.id;
  const updates = {
      name: req.body.userName,
      country: req.body.country,
      age: req.body.age
  };
console.log(userId)
  User.findByIdAndUpdate(userId, updates).then((user) => {
    console.log(user)
    res.redirect('/profile');
  });
};