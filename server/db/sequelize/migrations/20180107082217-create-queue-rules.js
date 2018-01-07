module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('QueueRules', {
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
        },
        allowNull: true,
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      repeat: {
        type: Sequelize.STRING
      },
      voteThreshold: {
        type: Sequelize.FLOAT
      },
      durationSkip: {
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
    return queryInterface.dropTable('QueueRules');
  }
};
