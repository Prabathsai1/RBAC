const mongoose=require("mongoose")
const schema=new mongoose.Schema({
UserName:{type:String,require:true},
Email:{type:String,unique:true,require:true}
})
const model=new mongoose.model("user",schema)
module.exports = model

