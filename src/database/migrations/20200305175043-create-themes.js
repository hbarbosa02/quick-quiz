module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('themes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      descriptions: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      is_activated: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('themes')
  },
}
