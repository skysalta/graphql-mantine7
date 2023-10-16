export const typeDefs = `#graphql
  type Task {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    author: Author!
    task: Task!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }
  type Query {
    tasks: [Task]
    task(id: ID!): Task
    reviews: [Review]
    review(id: ID!): Review
    authors: [Author]
    author(id: ID!): Author
  }
  type Mutation {
    addTask(task: AddTaskInput!): Task
    deleteTask(id: ID!): [Task]
    updateTask(id: ID!, edits: EditTaskInput): Task
  }
  input AddTaskInput {
    title: String!,
    platform: [String!]!
  }
  input EditTaskInput {
    title: String,
    platform: [String!]
  }
`