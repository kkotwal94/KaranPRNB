module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('QueuePlaylists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      queueId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Queue',
          key: 'id'
        }
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
    return queryInterface.dropTable('QueuePlaylists');
  }
};
