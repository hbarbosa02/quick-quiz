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

    this.addHook('afterCreate', async data => {
      if (data.mode === 'Mode 1') {
        const { Score } = sequelize.models
        const score = await Score.findByPk(data.userId)
        await score.update({ value: score.value + data.score })
      }
    })

    return this
  }

  static associate(models) {
    this.belongsTo(models.User, { as: 'user' })
  }
}

export default Ranking
