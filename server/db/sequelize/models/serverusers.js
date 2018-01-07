export default (sequelize, DataTypes) => {
  const ServerUsers = sequelize.define('ServerUsers', {
    serverId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      }
    }
  });
  return ServerUsers;
};
