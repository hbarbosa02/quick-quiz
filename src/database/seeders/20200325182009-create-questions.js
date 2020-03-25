module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('questions', [
      {
        theme_id: 1,
        level_id: 1,
        text: 'Question theme technology, level easy',
      },
      {
        theme_id: 1,
        level_id: 2,
        text: 'Question theme technology, level medium',
      },
      {
        theme_id: 1,
        level_id: 3,
        text: 'Question theme technology, level hard',
      },
      {
        theme_id: 1,
        level_id: 1,
        text: 'Question theme sports, level easy',
      },
      {
        theme_id: 1,
        level_id: 2,
        text: 'Question theme sports, level medium',
      },
      {
        theme_id: 1,
        level_id: 3,
        text: 'Question theme sports, level hard',
      },
    ])
  },

  down: queryInterface => queryInterface.bulkDelete('questions'),
}
