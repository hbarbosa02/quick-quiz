import Theme from '../../models/Theme'
import Level from '../../models/Level'
import Question from '../../models/Question'

import { authenticated } from '../../../util/composables'

export default {
  Question: {
    theme: parent => Theme.findByPk(parent.themeId),

    level: parent => Level.findByPk(parent.levelId),
  },

  Query: {
    questions: authenticated(() =>
      Question.findAll({ where: { isActivated: true } })
    ),

    questionsByTheme: authenticated((_, args) =>
      Question.findAll({ where: { themeId: args.theme, isActivated: true } })
    ),

    questionsByLevel: authenticated((_, args) =>
      Question.findAll({ where: { levelId: args.level, isActivated: true } })
    ),
  },
}
