var getSpotify = require("./spotify");
var getConcert = require("./concert");
var getMovie = require("./movie");
var doWhatItSays = require("./do-what-it-says");

var inputs = process.argv;

function liriSearch(searchType, searchData) {
  switch (searchType) {
    case "concert-this":
      getConcert(searchData);
      break;

    case "spotify-this-song":
      getSpotify(searchData);
      break;

    case "movie-this":
      getMovie(searchData);
      break;

    case "do-what-it-says":
      doWhatItSays(liriSearch);
      break;

    default:
      console.log("Please Try Again");
      break;
  }
}

liriSearch(inputs[2], inputs.slice(3).join("+"));
