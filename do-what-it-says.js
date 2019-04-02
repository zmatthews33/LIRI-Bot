var fs = require("fs");

function doWhatItSays(func) {
  fs.readFile("./random.txt", "utf-8", function(err, resp) {
    var command = resp.split(",");
    func(command[0], command[1]);
  });
}

module.exports = doWhatItSays;
