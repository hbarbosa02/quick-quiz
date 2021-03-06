import Sequelize, { Model } from 'sequelize'
import { hashSync, compareSync } from 'bcryptjs'
import * as jwt from 'jsonwebtoken'

import authConfig from '../../config/auth'

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    )

    this.addHook('beforeSave', user => {
      if (user.password) user.password_hash = hashSync(user.password, 8)
    })

    this.addHook('afterCreate', async user => {
      const { Score } = sequelize.models
      await Score.create({ userId: user.id, score: 0 })
    })

    return this
  }

  static associate(models) {
    this.hasMany(models.Token, { as: 'tokens' })
    this.hasMany(models.Ranking, { as: 'rankings' })
    this.hasOne(models.Score, { as: 'score', foreignKey: 'user_id' })
  }

  checkPassword(password) {
    return compareSync(password, this.password_hash)
  }

  generateToken({ id = this.id }) {
    const { secret, expiresIn } = authConfig

    return jwt.sign({ id }, secret, { expiresIn })
  }
}

export default User
