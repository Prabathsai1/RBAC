const Model = require("../../model/role.model.js")
async function createRole(req, res) {
  try {
      const name = req.body.name;
      const permissions = req.body.permissions;
        if (!name) {
            return res.status(400).json({ message: "Role name is required" });
        }
        if (!permissions) {
            return res.status(400).json({ message: "Role permissions are required" });
        }
        const existingRole = await Model.findOne({ name });
        if (existingRole) {
            return res.status(400).json({ message: "Role already exists" });
        }   
        const role = await Model.create({ name, permissions });
        res.status(201).json({
        message: "Role created successfully",
        data: role
        });
  } catch (error) {
    res.status(500).json({ message: error.message });
    }   
}

module.exports = createRole;