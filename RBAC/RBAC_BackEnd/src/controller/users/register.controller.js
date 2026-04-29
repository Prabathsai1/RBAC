const Model = require("../../model/users.model.js")
async function User(req, res) {
try{

    if (!req.body.UserName || !req.body.Email) {
        return res.status(400).json({ message: "all feilds required" })
    }

    const findUser=await Model.findOne({Email:req.body.Email})

        if(findUser){
        return res.status(400).json({message:"user is already registered"})
        }
    await Model.create({
        UserName: req.body.UserName,
        Email: req.body.Email
    })
res.status(201).json({message:"registered successfully"})
}
catch(error){
return res.status(500).json({message:error.message})
}
}
module.exports=User