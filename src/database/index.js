import Sequelize from 'sequelize'

import databaseConfig from '../config/database'

import User from '../app/models/User'
import Token from '../app/models/Token'
import Theme from '../app/models/Theme'
import Level from '../app/models/Level'
import Question from '../app/models/Question'

const models = [User, Token, Theme, Level, Question]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(databaseConfig)

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))
  }
}

export default new Database()
