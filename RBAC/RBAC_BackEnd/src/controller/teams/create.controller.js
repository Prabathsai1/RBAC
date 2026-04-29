const Model = require("../..//model/teams.model.js");

async function createTeam(req, res) {
  try {
    const  name  = req.body.name;

    if (!name) {
      return res.status(400).json({ message: "Team name is required" });
    }

    const findTeam = await Model.findOne({ name });
    if (findTeam) {
      return res.status(400).json({ message: "Team already exists" });
    }

    const createTeam = await Model.create({ name });

    res.status(201).json({
      message: "Team created successfully",
      data: createTeam
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = createTeam;