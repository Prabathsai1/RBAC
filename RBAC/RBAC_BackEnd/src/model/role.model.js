const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  permissions: [
    {
      type: String
    }
  ]
});
const model = new mongoose.model("role", roleSchema);
module.exports = model