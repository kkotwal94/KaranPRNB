export default (sequelize, DataTypes) => {
  const Queue = sequelize.define('Queue', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    lobbyId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate(models) {
        Queue.belongsToMany(models.Playlists, {through: 'QueuePlaylists', as: 'QueuePlaylist'});
        Queue.hasOne(models.QueueRules);
        Queue.belongsTo(models.Lobbies);
      }
    }
  });
  return Queue;
};
