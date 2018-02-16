
  var request = require('request');
module.exports.currentPlaying = (user, next) => {
  const accessToken = user.social.accessToken;
  // TODO: use request lib
  // request("https://api.spotify.com/v1/me/player/currently-playing" -H `Authorization: Bearer ${accessToken}`)

  request("https://api.spotify.com/v1/me/player/currently-playing",{
    'auth': {
      'bearer': accessToken
    }
  }, (error, res, song) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', res && res.statusCode); // Print the response status code if a response was received
    //console.log('body:', song); // Print the HTML for the Google homepage.
    const track = JSON.parse(song); // Object.keys & Object.values // TypeOf
    console.log(Object.keys(track)); // [ 'timestamp', 'progress_ms', 'is_playing', 'item', 'context' ]
    console.log(track.item.artists[0].name);
    console.log(track.item.name);
    console.log(track.item)
    const nameArtists = track.item.artists[0].name;
    const nameSong = track.item.name;
    const songs = [nameArtists, nameSong];
    next(null, songs);
  });
}