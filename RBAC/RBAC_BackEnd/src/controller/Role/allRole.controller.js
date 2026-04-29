const Model = require("../../model/role.model.js")
async function getAllRoles(req, res) {
  try {
        const role = await Model.find().select("name");
        res.status(200).json({
        message: "Roles retrieved successfully",
        data: role
        });
  } catch (error) {
    res.status(500).json({ message: error.message });
    }   
}

module.exports = getAllRoles;