// Import the gql tagged template function
const { gql } = require("apollo-server-express");

// Create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    posts: [Post]
  }
  type Post {
    _id: ID
    postText: String
    createdAt: String
    username: String
    locationName: String
    address: String
    secondary: String
    city: String
    state: String
    zipCode: String
    tags: [String]
    commentCount: Int
    comments: [Comment]
  }
  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }
  type Tag {
    _id: ID
    tagBody: String
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    allposts: [Post]
    posts(username: String): [Post]
    post(_id: ID!): Post
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postText: String!, locationName: String, address: String, secondary: String, city: String, state: String, zipCode: String, tags: [String]): Post
    addComment(postId: ID!, commentBody: String!): Post
    addFriend(friendId: ID!): User
  }
  type Auth {
    token: ID!
    user: User
  }
`;

// Export the typeDefs
module.exports = typeDefs;
