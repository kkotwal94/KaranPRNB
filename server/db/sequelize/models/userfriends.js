export default (sequelize, DataTypes) => {
  const UserFriends = sequelize.define('UserFriends', {
    userId: DataTypes.INTEGER,
    friendId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      }
    }
  });
  return UserFriends;
};
