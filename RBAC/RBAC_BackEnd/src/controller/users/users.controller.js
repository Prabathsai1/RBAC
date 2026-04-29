const Model = require("../../model/users.model.js")
async function Users(req, res) {
try{
    const users = await Model.find()
res.status(200).json({ users })
}
catch(error){
return res.status(500).json({message:error.message})
}
}
module.exports=Users