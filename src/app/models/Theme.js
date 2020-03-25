import Sequelize, { Model } from 'sequelize'

class Theme extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        descriptions: Sequelize.STRING,
        isActivated: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    )

    return this
  }

  static associate(models) {
    this.hasMany(models.Question, { as: 'questions' })
  }
}

export default Theme
