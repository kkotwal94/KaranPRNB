module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PTATracks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      playlistId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Playlists',
          key: 'id'
        },
      },
      trackId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tracks',
          key: 'id'
        },
      },
      rating: {
        type: Sequelize.INTEGER
      },
      duration: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('PTATracks');
  }
};
