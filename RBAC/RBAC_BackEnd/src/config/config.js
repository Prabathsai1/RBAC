const env=require("dotenv")
env.config()
if(!process.env.db){
throw new Error("db string is missing")
}
const data_env={db:process.env.db}
module.exports=data_env