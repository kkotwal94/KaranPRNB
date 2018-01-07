export default (sequelize, DataTypes) => {
  const LobbyPolicy = sequelize.define('LobbyPolicy', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate(models) {
        LobbyPolicy.belongsTo(models.Lobbies);
      }
    }
  });
  return LobbyPolicy;
};
