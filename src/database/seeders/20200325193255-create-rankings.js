module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('rankings', [
      {
        user_id: 1,
        mode: 'Mode 1',
        score: 100,
      },
      {
        user_id: 1,
        mode: 'Mode 2',
        score: 100,
      },
    ])
  },

  down: queryInterface => queryInterface.bulkDelete('rankings'),
}
