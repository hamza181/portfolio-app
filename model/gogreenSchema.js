const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gogreenSchema = new Schema({
  area: { type: String, required: true },
  gardenerName: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  plantId: { type: String, required: true },
  plantName: { type: String, required: true },
});

module.exports = mongoose.model("Plants", gogreenSchema);
