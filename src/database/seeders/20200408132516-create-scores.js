module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('scores', [
      {
        user_id: 1,
        value: 0,
      },
    ])
  },

  down: queryInterface => queryInterface.bulkDelete('scores'),
}
