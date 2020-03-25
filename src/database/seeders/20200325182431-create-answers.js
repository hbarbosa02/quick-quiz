module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('answers', [
      {
        question_id: 1,
        number: 1,
        text: 'False answer',
        is_right: false,
      },
      {
        question_id: 1,
        number: 2,
        text: 'Right answer',
        is_right: true,
      },
      {
        question_id: 2,
        number: 1,
        text: 'False answer',
        is_right: false,
      },
      {
        question_id: 2,
        number: 2,
        text: 'Right answer',
        is_right: true,
      },
      {
        question_id: 3,
        number: 1,
        text: 'False answer',
        is_right: false,
      },
      {
        question_id: 3,
        number: 2,
        text: 'Right answer',
        is_right: true,
      },
      {
        question_id: 4,
        number: 1,
        text: 'False answer',
        is_right: false,
      },
      {
        question_id: 4,
        number: 2,
        text: 'Right answer',
        is_right: true,
      },
      {
        question_id: 5,
        number: 1,
        text: 'False answer',
        is_right: false,
      },
      {
        question_id: 5,
        number: 2,
        text: 'Right answer',
        is_right: true,
      },
      {
        question_id: 6,
        number: 1,
        text: 'False answer',
        is_right: false,
      },
      {
        question_id: 6,
        number: 2,
        text: 'Right answer',
        is_right: true,
      },
    ])
  },

  down: queryInterface => queryInterface.bulkDelete('answers'),
}
