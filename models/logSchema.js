const mongoose = require("mongoose");
const LogSchema = new mongoose.Schema({
  Algorithm_Name: { type: String, required: true },
  Input_Data: { type: Object, required: true },
  Output_Data: { type: Object, required: true },
});
const model = mongoose.model("Logs", LogSchema);
module.exports = model;
