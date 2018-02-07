const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const LyricsSchema = new Schema({
  songName: String,
  artist: String,
  year: Number
  lyrics: Object,
});

module.exports = mongoose.model('Lyrics', LyricsSchema); 
