var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var NeighborhoodSchema = new Schema ({
  name: String,
  wikiUrl: String,
  restaurants: [Restaurant.schema]
});

var Neighborhood = mongoose.model("Neighborhood", NeighborhoodSchema);

module.exports = Neighborhood;