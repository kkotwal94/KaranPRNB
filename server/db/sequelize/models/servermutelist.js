'use strict';
module.exports = (sequelize, DataTypes) => {
  var ServerMutelist = sequelize.define('ServerMutelist', {
    serverId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ServerMutelist;
};