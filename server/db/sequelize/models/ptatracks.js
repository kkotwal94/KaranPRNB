export default (sequelize, DataTypes) => {
  const PTATracks = sequelize.define('PTATracks', {
    playlistId: DataTypes.INTEGER,
    trackId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    duration: DataTypes.FLOAT
  }, {
    classMethods: {
      associate(models) {
        PTATracks.belongsTo(models.Playlists);
        PTATracks.hasOne(models.Tracks);
        PTATracks.hasMany(models.Votes);
      }
    }
  });
  return PTATracks;
};
