import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

// data
import db from './_db.js'

// types
import { typeDefs } from './schema.js'

// resolvers
const resolvers = {
  Query: {
    tasks() {
      return db.tasks
    },
    task(_, args) {
      return db.tasks.find((task) => task.id === args.id)
    },
    authors() {
      return db.authors
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id)
    },
    reviews() {
      return db.reviews
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id)
    }
  },
  Task: {
    reviews(parent) {
      return db.reviews.filter((r) => r.task_id === parent.id)
    }
  },
  Review: {
    author(parent) {
      return db.authors.find((a) => a.id === parent.author_id)
    },
    task(parent) {
      return db.tasks.find((g) => g.id === parent.task_id)
    }
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((r) => r.author_id === parent.id)
    }
  },
  Mutation: {
    addTask(_, args) {
      let task = {
        ...args.task, 
        id: Math.floor(Math.random() * 10000).toString()
      }
      db.tasks.push(task)

      return task
    },
    deleteTask(_, args) {
      db.tasks = db.tasks.filter((g) => g.id !== args.id)

      return db.tasks
    },
    updateTask(_, args) {
      db.tasks = db.tasks.map((g) => {
        if (g.id === args.id) {
          return {...g, ...args.edits}
        }

        return g
      })

      return db.tasks.find((g) => g.id === args.id)
    }
  }
}

// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
})

console.log(`Server ready at: 🚀🚀🚀 ${url} 🚀🚀🚀`)