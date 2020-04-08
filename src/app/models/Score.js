import Sequelize, { Model } from 'sequelize'

class Score extends Model {
  static init(sequelize) {
    super.init(
      {
        userId: {
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        value: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    )

    return this
  }

  static associate(models) {
    this.belongsTo(models.User, { as: 'user' })
  }
}

export default Score
