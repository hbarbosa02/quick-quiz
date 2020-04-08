import Theme from '../../models/Theme'
import Level from '../../models/Level'
import Question from '../../models/Question'

import { shuffle } from '../../../util/shuffle'
import { authenticated } from '../../../util/composables'

export default {
  Question: {
    theme: parent => Theme.findByPk(parent.themeId),

    level: parent => Level.findByPk(parent.levelId),
  },

  Query: {
    questions: authenticated(async (_, args) => {
      const obj = {
        themeId: args.theme,
        levelId: args.level,
      }

      Object.keys(obj).forEach(key => obj[key] === undefined && delete obj[key])

      const array = await Question.findAll({
        where: {
          ...obj,
          isActivated: true,
        },
      })

      return shuffle(array)
    }),

    questionsByTheme: authenticated((_, args) =>
      Question.findAll({ where: { themeId: args.theme, isActivated: true } })
    ),

    questionsByLevel: authenticated((_, args) =>
      Question.findAll({ where: { levelId: args.level, isActivated: true } })
    ),
  },
}
