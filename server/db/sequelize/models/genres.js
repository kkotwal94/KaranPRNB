export default (sequelize, DataTypes) => {
  const Genres = sequelize.define('Genres', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate(models) {
        Genres.belongsToMany(models.Servers, {through: 'ServersGenres', as: 'Genres'});
      }
    }
  });
  return Genres;
};
