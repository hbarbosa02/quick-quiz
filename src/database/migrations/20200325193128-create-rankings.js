module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('rankings', {
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
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      mode: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      score: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('rankings')
  },
}
