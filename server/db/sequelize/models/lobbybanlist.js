export default (sequelize, DataTypes) => {
  const LobbyBanlist = sequelize.define('LobbyBanlist', {
    lobbyId: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      }
    }
  });
  return LobbyBanlist;
};
