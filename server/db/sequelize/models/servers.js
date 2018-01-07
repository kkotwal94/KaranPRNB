export default (sequelize, DataTypes) => {
  const Servers = sequelize.define('Servers', {
    ownerId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    avatar: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate(models) {
        Servers.belongsTo(models.User);
        Servers.belongsToMany(models.Genres, {through: 'ServersGenres', as: 'Server'});
        Servers.belongsToMany(models.User, {through: 'ServerAdmins', as: 'Server'});
        Servers.belongsToMany(models.User, {through: 'ServerUsers', as: 'Server'});
        Servers.belongsToMany(models.User, {through: 'ServerBanlist', as: 'Server'});
        Servers.belongsToMany(models.User, {through: 'ServerMutelist', as: 'Server'});
      }
    }
  });
  return Servers;
};
