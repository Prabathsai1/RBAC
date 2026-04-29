const mongoose=require("mongoose")
const env=require("../config/config.js")
async function connect(){
try{
await mongoose.connect(env.db,console.log("server connected to db"))
}
catch(error){
res.status(500).json({message:error.message})
}
}
module.exports=connect