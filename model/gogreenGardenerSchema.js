const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gogreenGardenerSchema = new Schema({
  contact: { type: String, required: true },
  name: { type: String, required: true },
  requestedArea: { type: String, required: true },
  requestedPlants: { type: String, required: true },
});

module.exports = mongoose.model("Gardeners", gogreenGardenerSchema);
