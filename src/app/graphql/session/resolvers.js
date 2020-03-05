import User from '../../models/User'

export default {
  Mutation: {
    createSession: async (root, args) => {
      const { email, password } = args

      const user = await User.findOne({ where: { email } })

      if (!user) throw Error('User not found.')

      if (!user.checkPassword(password)) {
        throw Error('Incorrect e-mail or password.')
      }

      return user.generateToken(user)
    },
  },
}
