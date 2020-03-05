import 'dotenv/config'

import { resolve } from 'path'
import { GraphQLServer } from 'graphql-yoga'
import { makeExecutableSchema } from 'graphql-tools'
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas'

import authMiddleware from './app/middlewares/auth'

import './database'

class AppController {
  constructor() {
    this.server = new GraphQLServer({
      schema: makeExecutableSchema({
        typeDefs: mergeTypes(
          fileLoader(resolve(__dirname, 'app', 'graphql'), {
            recursive: true,
          }),
          {
            all: true,
          }
        ),
        resolvers: mergeResolvers(
          fileLoader(
            resolve(__dirname, 'app', 'graphql'),
            {
              recursive: true,
              extensions: ['.js'],
            },
            {
              all: true,
            }
          )
        ),
      }),
      context: req => req.request,
      middlewares: [authMiddleware],
    })
  }
}

export default new AppController().server
