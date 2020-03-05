import { randomBytes } from 'crypto'
import { promisify } from 'util'

import User from '../../models/User'
import Token from '../../models/Token'

import Queue from '../../../lib/Queue'
import ForgotPasswordMail from '../../jobs/ForgotPasswordMail'

export default {
  Mutation: {
    forgotPassword: async (parent, args) => {
      const { email } = args

      const user = await User.findOne({
        where: { email },
        attributes: ['id', 'name', 'email'],
      })

      if (!user) throw Error('User not found.')

      const userToken = await Token.findOne({
        where: { user_id: user.id, is_revoked: false },
      })

      const random = await promisify(randomBytes)(16)
      const randomCode = random.toString('hex').slice(0, 10)

      const params = {
        user_id: user.id,
        token: randomCode,
        type: 'forgotpassword',
      }

      if (!userToken) {
        await Token.create(params)
      }

      const token = !userToken ? randomCode : userToken

      await Queue.add(ForgotPasswordMail.key, { user, token })

      return 'Password recovery email sent successfully!'
    },

    resetPassword: async (root, args) => {
      const { token, password, confirmPassword } = args

      const userToken = await Token.findOne({
        where: { token, is_revoked: false },
      })

      if (!userToken) throw Error('Token not found.')

      const user = await User.findByPk(userToken.user_id)
      if (!user) throw Error('User not found.')

      if (password !== confirmPassword) {
        throw Error('Passwords does not match')
      }

      await user.update({ password })
      await userToken.update({ is_revoked: true })

      return 'Your password was updated successfully'
    },
  },
}
