const db = require('../db/models');

const teamRender = async (req, res) => {
  const allTeam = await db.Team.findAll();
  res.render('teams', { teams: allTeam });
};

const teamCreate = async (req, res) => {
  try {
    const {
      team_name,
    } = req.body;
    if (team_name) {
      const newTeam = await db.Team.create(
        {
          team_name,
        },
        { returning: true, plain: true },
      );
      return res.status(201).json(newTeam);
    }
    return res.sendStatus(406);
  } catch (error) {
    return res.sendStatus(500);
  }
};

module.exports = {
  teamRender,
  teamCreate,
};
