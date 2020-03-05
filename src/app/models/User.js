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

    return this
  }

  static associate(models) {
    this.hasMany(models.Token, { as: 'tokens' })
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
