const apiLyric = require("lyric-get");
const request = require('request');
const translate = require('translate');
translate.key = process.env.TRANSLATE_KEY || '';
translate.engine = process.env.TRANSLATE_ENGINE || '';

//song playing
module.exports.currentPlaying = (user, next) => {
  const accessToken = user.social.accessToken;
  request("https://api.spotify.com/v1/me/player/currently-playing", {
    'auth': {
      'bearer': accessToken
    }
  }, (error, res, song) => {
    if(song.length!==0){
      const track = JSON.parse(song);
      if (track.is_playing) {
        const currentSong = {
          nameArtists: track.item.artists[0].name,
          nameSong: track.item.name
        }

  //lyrics
        apiLyric.get(currentSong.nameArtists, currentSong.nameSong, function(err, res) {
          if (err) {
            console.log(err);
            next()
          } else {
            let language = user.language;
            currentSong.lyricSong = res;
            const textLyric = currentSong.lyricSong.toString();
            translate(textLyric, {
              to: language
            }).then(text => {
              currentSong.translateLyricSong = text;
              next(null, currentSong);
            });
          }
        });
      } else {
        next(null, currentSong)
      }
    }else{next()}
  });
}
