module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('questions', [
      {
        theme_id: 1,
        level_id: 1,
        text: 'Question theme technology, level easy',
        score: 1,
      },
      {
        theme_id: 1,
        level_id: 2,
        text: 'Question theme technology, level medium',
        score: 1,
      },
      {
        theme_id: 1,
        level_id: 3,
        text: 'Question theme technology, level hard',
        score: 1,
      },
      {
        theme_id: 2,
        level_id: 1,
        text: 'Question theme sports, level easy',
        score: 1,
      },
      {
        theme_id: 2,
        level_id: 2,
        text: 'Question theme sports, level medium',
        score: 1,
      },
      {
        theme_id: 2,
        level_id: 3,
        text: 'Question theme sports, level hard',
        score: 1,
      },
    ])
  },

  down: queryInterface => queryInterface.bulkDelete('questions'),
}
