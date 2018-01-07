module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('LobbyTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        alowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        alowNull: false,
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
    return queryInterface.dropTable('LobbyTypes');
  }
};
