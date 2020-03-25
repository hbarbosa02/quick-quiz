module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
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
      delete_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(80),
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      password_hash: {
        allowNull: false,
        type: Sequelize.STRING(60),
      },
      current_score: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('users')
  },
}
