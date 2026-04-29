const mongoose=require("mongoose")
const schema=new mongoose.Schema({
 name: {
    type: String,
    required: true,
    unique: true
  }
})
const model=new mongoose.model("team",schema)

module.exports = model