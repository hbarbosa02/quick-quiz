module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('themes', [
      {
        name: 'technology',
        descriptions: 'technology',
      },
      {
        name: 'sports',
        descriptions: 'sports',
      },
    ])
  },

  down: queryInterface => queryInterface.bulkDelete('themes'),
}
