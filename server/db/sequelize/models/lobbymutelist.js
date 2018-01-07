module.exports = (sequelize, DataTypes) => {
  const LobbyMutelist = sequelize.define('LobbyMutelist', {
    lobbyId: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      }
    }
  });
  return LobbyMutelist;
};
