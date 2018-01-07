export default (sequelize, DataTypes) => {
  const LobbyAdmins = sequelize.define('LobbyAdmins', {
    lobbyId: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      }
    }
  });
  return LobbyAdmins;
};
