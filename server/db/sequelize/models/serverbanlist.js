export default (sequelize, DataTypes) => {
  const ServerBanlist = sequelize.define('ServerBanlist', {
    serverId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      }
    }
  });
  return ServerBanlist;
};
