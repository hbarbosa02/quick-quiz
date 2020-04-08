import Sequelize, { Model } from 'sequelize'

class Question extends Model {
  static init(sequelize) {
    super.init(
      {
        themeId: Sequelize.INTEGER,
        levelId: Sequelize.INTEGER,
        text: Sequelize.STRING,
        score: Sequelize.INTEGER,
        isActivated: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    )

    return this
  }

  static associate(models) {
    this.belongsTo(models.Theme, { foreignKey: 'theme_id', as: 'theme' })
    this.belongsTo(models.Level, { foreignKey: 'level_id', as: 'level' })
  }
}

export default Question
