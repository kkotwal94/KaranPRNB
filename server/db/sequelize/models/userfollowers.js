export default (sequelize, DataTypes) => {
  const UserFollowers = sequelize.define('UserFollowers', {
    userId: DataTypes.INTEGER,
    friendId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      }
    }
  });
  return UserFollowers;
};
