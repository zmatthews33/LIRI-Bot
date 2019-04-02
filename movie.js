require("dotenv").config();

var keys = require("./keys.js");
var omdbKey = keys.omdb;
var axios = require("axios");

function getMovie(movieName, notFound) {
  if (!notFound) {
    console.log("\nSearching for movie...\n");
  }

  var searchUrl =
    "http://www.omdbapi.com/?apikey=" + omdbKey + "&t=" + movieName;

  axios
    .get(searchUrl)
    .then(function(resp) {
      var movie = resp.data;

      if (movie.Response === "True") {
        var imdbRating = movie.Ratings.filter(
          rating => rating.Source === "Internet Movie Database"
        );

        console.log("Title: " + movie.Title);
        console.log("Year: " + movie.Year);
        console.log("IMDB Rating: " + imdbRating[0].Value);
        console.log("Country Produced: " + movie.Country);
        console.log("Language: " + movie.Language);
        console.log("Plot: " + movie.Plot);
        console.log("Actors: " + movie.Actors);
      } else {
        console.log(
          "\nMovie not found. Based on your search I think should check out Mr. Nobody instead!"
        );
        console.log("\n-~-~-~-~-~-~-~-~-~-~-~-\n");
        getMovie("mr nobody", true);
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}

module.exports = getMovie;
