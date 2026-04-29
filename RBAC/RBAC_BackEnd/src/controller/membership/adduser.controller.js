const Model = require("../../model/addUserToTeam.model.js")
const UserModel = require("../../model/users.model.js")
const TeamModel = require("../../model/teams.model.js")
async function addUserToTeam(req, res) {
  try {
        const { userId, teamId } = req.body;
      if(!userId || !teamId){
        return res.status(400).json({ message: "User ID and Team ID are required" });
        }
        const user = await UserModel.findById(userId);
        if (!user) {
        return res.status(404).json({ message: "User not found" });
        }
        const team = await TeamModel.findById(teamId);
        if (!team) {
        return res.status(404).json({ message: "Team not found" });
        }
        const existingMembership = await Model.findOne({ user: userId, team: teamId });
        if (existingMembership) {
        return res.status(400).json({ message: "User is already a member of the team" });
        }
        const membership = await Model.create({ user: userId, team: teamId });
        res.status(201).json({
        message: "User added to team successfully",
        data: membership
        });
  } catch (error) {
    res.status(500).json({ message: error.message });
    }
}

module.exports = addUserToTeam;
