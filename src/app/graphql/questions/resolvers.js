import Theme from '../../models/Theme'
import Level from '../../models/Level'
import Answer from '../../models/Answer'
import Question from '../../models/Question'

import { shuffle } from '../../../util/shuffle'
import { authenticated } from '../../../util/composables'

export default {
  Question: {
    theme: parent => Theme.findByPk(parent.themeId),

    level: parent => Level.findByPk(parent.levelId),

    answers: parent => Answer.findAll({ where: { questionId: parent.id } }),
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

      return shuffle(array).slice(0, 9)
    }),

    questionsByTheme: authenticated((_, args) =>
      Question.findAll({ where: { themeId: args.theme, isActivated: true } })
    ),

    questionsByLevel: authenticated((_, args) =>
      Question.findAll({ where: { levelId: args.level, isActivated: true } })
    ),
  },
}
