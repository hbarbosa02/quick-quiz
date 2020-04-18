import Sequelize, { Model } from 'sequelize'

class Answer extends Model {
  static init(sequelize) {
    super.init(
      {
        questionId: Sequelize.INTEGER,
        type: Sequelize.STRING,
        text: Sequelize.STRING,
        number: Sequelize.INTEGER,
        isRight: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    )

    return this
  }

  static associate(models) {
    this.belongsTo(models.Question, {
      foreignKey: 'question_id',
      as: 'question',
    })
  }
}

export default Answer
