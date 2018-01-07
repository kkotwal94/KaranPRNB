module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Lobbies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      serverId: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      lobbyTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'LobbyType',
          key: 'id'
        }
      },
      lobbyPolicyId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'LobbyPolicy',
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
    return queryInterface.dropTable('Lobbies');
  }
};
