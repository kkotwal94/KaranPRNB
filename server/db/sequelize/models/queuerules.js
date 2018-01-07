export default (sequelize, DataTypes) => {
  const QueueRules = sequelize.define('QueueRules', {
    queueId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    repeat: DataTypes.STRING,
    voteThreshold: DataTypes.FLOAT,
    durationSkip: DataTypes.FLOAT
  }, {
    classMethods: {
      associate(models) {
        QueueRules.belongsTo(models.Queue);
        QueueRules.belongsTo(models.User);
      }
    }
  });
  return QueueRules;
};
