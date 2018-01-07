module.exports = (sequelize, DataTypes) => {
  const Votes = sequelize.define('Votes', {
    userId: DataTypes.INTEGER,
    ptatrackId: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate(models) {
        Votes.belongsTo(models.User);
        Votes.belongsTo(models.PTATracks);
      }
    }
  });
  return Votes;
};
