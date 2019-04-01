require("dotenv").config();

var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var getSpotify = function(a) {
  spotify
    .search({
      type: "track",
      query: a
    })
    .then(function(resp) {
      if (resp.tracks.items.length) {
        resp.tracks.items.forEach(function(item) {
          var artist = item.album.artists[0].name;
          var songName = item.name;
          var album = item.album.name;
          var previewURL = item.preview_url;
          console.log("Artist: ", artist);
          console.log("Song Title: ", songName);
          console.log("Album: ", album);
          console.log("Preview: ", previewURL);
          console.log("-~-~-~-~-~-~-~-~-~-~-~-\n");
        });
      } else {
        // if no results, returns default of "the Sign" by Ace of Base
        getSpotify("the sign");
      }
    })
    .catch(function(err) {
      console.log(err);
    });
};

module.exports = getSpotify;
