const Model = require("../..//model/teams.model.js");

async function createTeam(req, res) {
  try {

    const findTeam = await Model.find();

    res.status(201).json({
      data: findTeam
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = createTeam;