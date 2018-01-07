export default (sequelize, DataTypes) => {
  const ServerAdmins = sequelize.define('ServerAdmins', {
    serverId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      }
    }
  });
  return ServerAdmins;
};
