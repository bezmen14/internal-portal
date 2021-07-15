const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    static associate({ Project }) {
      this.belongsTo(Project, { foreignKey: 'id' });
    }
  }
  Team.init({
    team_name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};
