module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('levels', [
      {
        name: 'easy',
        descriptions: 'easy',
      },
      {
        name: 'medium',
        descriptions: 'medium',
      },
      {
        name: 'hard',
        descriptions: 'hard',
      },
    ])
  },

  down: queryInterface => queryInterface.bulkDelete('levels'),
}
