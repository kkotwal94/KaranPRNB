export default (sequelize, DataTypes) => {
  const LobbyType = sequelize.define('LobbyType', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate(models) {
        LobbyType.belongsTo(models.Lobbies);
      }
    }
  });
  return LobbyType;
};
