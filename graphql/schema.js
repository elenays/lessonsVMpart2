const { buildSchema } = require('graphql')

module.exports = buildSchema(`

    type Todo {
        id: ID!
        title: String!
        done: Boolean!
        createdAt: String
        updatedAt: String
    }

    input UserInput {
        name: String!
        email: String!
    }

    type Query {
        getTodos: [Todo!]
    }

    input TodoInput {
        title: String!
    }

    type Mutation {
        createTodo(todo: TodoInput!): Todo!
        completeToto(id: ID!) : Todo!
        deleteTodo(id: ID!): Boolean!
    }
`)