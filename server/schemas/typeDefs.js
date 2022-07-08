// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    postCount: Int
    posts: [Post]
  }

  type Post {
    _id: ID
    title: String
    content: String
    username: String
    replies: [Reply]
  }                    

  type Replies {
    _id: ID
    replyBody: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;
