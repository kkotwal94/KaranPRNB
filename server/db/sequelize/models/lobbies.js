export default (sequelize, DataTypes) => {
  const Lobbies = sequelize.define('Lobbies', {
    serverId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    avatar: DataTypes.STRING,
    password: DataTypes.STRING,
    lobbyStateId: DataTypes.INTEGER,
    lobbyPolicyId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate(models) {
        Lobbies.hasOne(models.LobbyPolicy);
        Lobbies.hasOne(models.LobbyType);
        Lobbies.belongsToMany(models.User, {through: 'LobbyBanlist', as: 'LobbyBannedUsers'});
        Lobbies.belongsToMany(models.User, {through: 'LobbyMutelist', as: 'LobbyMutedUsers'});
        Lobbies.belongsToMany(models.User, {through: 'LobbyAdmins', as: 'LobbyAdmins'});
        Lobbies.belongsToMany(models.User, {through: 'LobbyUsers', as: 'LobbyUsers'});
      }
    }
  });
  return Lobbies;
};
