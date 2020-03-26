import User from '../../models/User'
import Ranking from '../../models/Ranking'

import { authenticated } from '../../../util/composables'

export default {
  Ranking: {
    user: parent => User.findByPk(parent.userId),
  },

  Query: {
    ranking: authenticated((_, __, ctx) =>
      Ranking.findOne({ where: { userId: ctx.user.id } })
    ),

    rankings: authenticated((_, args, ctx) =>
      Ranking.findAll({
        where: { mode: args.mode, userId: ctx.user.id },
        order: [['score', 'DESC']],
        limit: 10,
        offset: 1,
      })
    ),
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
