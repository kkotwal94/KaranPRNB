
export default (sequelize, DataTypes) => {
  const LobbyUsers = sequelize.define('LobbyUsers', {
    lobbyId: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      }
    }
  });
  return LobbyUsers;
};
