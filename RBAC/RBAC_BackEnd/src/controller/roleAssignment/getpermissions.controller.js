const User = require("../../model/users.model.js")
const Team = require("../../model/teams.model.js")
const Model = require("../../model/role.model.js")
async function getPermissions(req, res) {
  try {
    const { userId, teamId, roleId } = req.body;

    if (!userId || !teamId || !roleId) {
      return res.status(400).json({ message: "All fields required" });
      }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
      } 
    const team = await Team.findById(teamId);
    if (!team) {
      return res.status(404).json({ message: "Team not found" });
      }
    const role = await Model.findById(roleId);
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
      } 
    const findData = await Model.findOne({ roleId }).select("permissions");

    res.status(201).json({ message: "Role permissions retrieved successfully", permissions: findData.permissions });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = getPermissions;