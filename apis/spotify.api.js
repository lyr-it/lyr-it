
module.exports.currentPlaying = (user, next) => {
  const accessToken = user.social.accessToken;
  // TODO: use request lib
  const songs = ["paquito", "el fari"];
  next(null, songs);
}
