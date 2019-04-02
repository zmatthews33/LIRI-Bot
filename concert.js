var axios = require("axios");
var moment = require("moment");

function getConcert(artist) {
  axios
    .get(
      "https://rest.bandsintown.com/artists/" +
        artist +
        "/events?app_id=codingbootcamp"
    )
    .then(function(resp) {
      //console.log(resp.data)
      resp.data.forEach(function(concert) {
        console.log(
          "Date and time: " +
            moment(concert.datetime).format("MM/DD/YYYY h:mmA")
        );

        console.log("Venue: " + concert.venue.name);
        console.log(
          "Location: " + concert.venue.city + ", " + concert.venue.country
        );
        console.log("-~-~-~-~-~-~-~-~-~-~-~-\n");
      });
    })
    .catch(function(error) {
      console.log(error);
    });
}

module.exports = getConcert;
