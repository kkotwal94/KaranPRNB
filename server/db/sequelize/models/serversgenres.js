export default (sequelize, DataTypes) => {
  const ServersGenres = sequelize.define('ServersGenres', {
    serverId: DataTypes.INTEGER,
    genreId: DataTypes.INTEGER
  });
  return ServersGenres;
};
