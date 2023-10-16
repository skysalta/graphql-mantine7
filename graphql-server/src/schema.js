export const typeDefs = `#graphql
  enum TaskType {
    IT
    BA
    SEO
    UX
  }
  type Task {
    id: ID!
    name: String!
    type: TaskType!
    description: String!
    author: [Author!]
  }
  type Author {
    id: ID!
    name: String!
    tasks: [Task!]
  }
  type Query {
    tasks: [Task]
    task(id: ID!): Task
    authors: [Author]
    author(id: ID!): Author
  }
  type Mutation {
    addTask(task: AddTaskInput!): Task
    deleteTask(id: ID!): [Task]
    updateTask(id: ID!, edits: EditTaskInput): Task
  }
  input AddTaskInput {
    name: String!,
    type: TaskType!,
    description: String!
  }
  input EditTaskInput {
    name: String,
    type: TaskType,
    description: String
  }
`;
