import User from '../../models/User'

import { authenticated } from '../../../util/composables'

export default {
  Query: {
    me: authenticated((root, args, ctx) => User.findByPk(ctx.user.id)),
  },

  Mutation: {
    createUser: async (root, args) => {
      const { name, email, password } = args.input

      const user = await User.findOne({ where: { email } })

      if (user) throw Error('User already exists.')

      return User.create({ name, email, password })
    },
  },
}
