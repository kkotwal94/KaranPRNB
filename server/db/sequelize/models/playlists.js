export default (sequelize, DataTypes) => {
  const Playlists = sequelize.define('Playlists', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate(models) {
        Playlists.belongsTo(models.User);
        Playlists.belongsToMany(models.Queue, {through: 'QueuePlaylists', as: 'QueuePlaylist'});
      }
    }
  });
  return Playlists;
};
