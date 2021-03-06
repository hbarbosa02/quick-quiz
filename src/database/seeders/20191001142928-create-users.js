const { hashSync } = require('bcryptjs')

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'iroman',
        email: 'iroman@marvel.com',
        password_hash: hashSync('123456789', 8),
        current_score: 0,
      },
    ])
  },

  down: queryInterface => queryInterface.bulkDelete('users'),
}
