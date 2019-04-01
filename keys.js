console.log("this is loaded");

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.omdb = process.env.OMDB_KEY;

//url = http://www.omdbapi.com/?i=tt3896198&apikey=7d41af82
