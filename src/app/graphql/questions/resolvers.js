import Theme from '../../models/Theme'
import Level from '../../models/Level'
import Question from '../../models/Question'

export default {
  Question: {
    theme: parent => Theme.findByPk(parent.themeId),

    level: parent => Level.findByPk(parent.levelId),
  },

  Query: {
    questions: () => Question.findAll({ where: { isActivated: true } }),
    questionsByTheme: (_, args) =>
      Question.findAll({ where: { themeId: args.theme, isActivated: true } }),
    questionsByLevel: (_, args) =>
      Question.findAll({ where: { levelId: args.level, isActivated: true } }),
  },
}
