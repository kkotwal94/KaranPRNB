export default (sequelize, DataTypes) => {
  const QueuePlaylists = sequelize.define('QueuePlaylists', {
    queueId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      }
    }
  });
  return QueuePlaylists;
};
