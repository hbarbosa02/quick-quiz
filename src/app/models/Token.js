import Sequelize, { Model } from 'sequelize'

class Token extends Model {
  static init(sequelize) {
    super.init(
      {
        token: Sequelize.STRING,
        type: Sequelize.STRING,
        is_revoked: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    )

    return this
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user' })
  }
}

export default Token
