module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('scores', {
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
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      value: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('scores')
  },
}
