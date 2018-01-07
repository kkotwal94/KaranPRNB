
export default (sequelize, DataTypes) => {
  const TrackType = sequelize.define('TrackType', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate(models) {
        TrackType.belongsTo(models.Tracks);
      }
    }
  });
  return TrackType;
};
