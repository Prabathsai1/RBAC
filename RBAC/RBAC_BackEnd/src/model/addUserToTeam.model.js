const mongoose=require("mongoose")
const schema=new mongoose.Schema({
 user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: "user"
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "team"
    }
})
const model=new mongoose.model("addUserToTeam",schema)

module.exports = model