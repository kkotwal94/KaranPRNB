module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Servers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ownerId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'Users',
            key: 'id'
          }
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }
  ).then(() =>
    queryInterface.addIndex(
      'Servers',
      [Sequelize.fn('lower', Sequelize.col('name'))],
      {
        indexName: 'servers_name',
        indiciesType: 'unique',
      }
    )
  );
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Servers');
  }
};
