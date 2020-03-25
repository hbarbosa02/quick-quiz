import Sequelize, { Model } from 'sequelize'

class Ranking extends Model {
  static init(sequelize) {
    super.init(
      {
        userId: Sequelize.INTEGER,
        mode: Sequelize.STRING,
        score: Sequelize.INTEGER,
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

export default Ranking
