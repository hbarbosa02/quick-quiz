import User from '../../models/User'
import Ranking from '../../models/Ranking'

import { authenticated } from '../../../util/composables'

export default {
  Ranking: {
    user: parent => User.findByPk(parent.userId),
  },

  Mutation: {
    saveScore: authenticated((_, args, ctx) =>
      Ranking.create({
        userId: ctx.user.id,
        score: args.score,
        mode: args.mode,
      })
    ),
  },
}
