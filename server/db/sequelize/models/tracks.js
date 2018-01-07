export default (sequelize, DataTypes) => {
  const Tracks = sequelize.define('Tracks', {
    trackTypeId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    length: DataTypes.INTEGER,
    artist: DataTypes.STRING,
    producer: DataTypes.STRING,
    music: DataTypes.STRING
  }, {
    classMethods: {
      associate(models) {
        Tracks.hasOne(models.TrackType);
        Tracks.belongsTo(models.PTATracks);
      }
    }
  });
  return Tracks;
};
