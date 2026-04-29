const Model = require("../../model/roleassigning.model.js")
const User = require("../../model/users.model.js")
const Team = require("../../model/teams.model.js")
const Role = require("../../model/role.model.js")
async function assignRole(req, res) {
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
    const role = await Role.findById(roleId);
    if (!role) {
      return res.status(404).json({ message: "Role not found" });
      } 
    const existing = await Model.findOne({ userId, teamId });

    if (existing) {
      existing.roleId = roleId;
      await existing.save();

      return res.json({ message: "Role updated successfully" });
    }

    await Model.create({ userId, teamId, roleId });

    res.status(201).json({ message: "Role assigned successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = assignRole;