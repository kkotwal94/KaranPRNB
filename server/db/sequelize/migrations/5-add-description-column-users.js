
module.exports = {
  up(queryInterface, DataTypes) {
    return queryInterface.addColumn('Users', 'description',
      {
        type: DataTypes.STRING,
        allowNull: true,
      }
    );
  },

  down(queryInterface) {
    return queryInterface.removeColumn('Users', 'description');
  }
};
