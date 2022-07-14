// Import gql
import { gql } from "@apollo/client";

// From Christina: Requirements say we need to retrieve, update, add, and delete data

// Export LOGIN_USER
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// Export ADD_USER
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
// Export ADD_POST
export const ADD_POST = gql`
  mutation addPost(
    $postText: String!
    $locationName: String!
    $address: String!
    $secondary: String
    $city: String!
    $state: String!
    $zipCode: String!
    $tags: [String!]
  ) {
    addPost(
      postText: $postText
      locationName: $locationName
      address: $address
      secondary: $secondary
      city: $city
      state: $state
      zipCode: $zipCode
      tags: $tags
    ) {
      _id
      postText
      username
      locationName
      address
      secondary
      city
      state
      zipCode
      tags
    }
  }
`;

// Export UPDATE_POST
export const UPDATE_POST = gql`
  mutation updatePost(
    $_id: ID!
    $postText: String
    $locationName: String
    $address: String
    $secondary: String
    $city: String
    $state: String
    $zipCode: String
    $tags: [String]  
  ) {
    updatePost(
    _id: $_id
    postText: $postText
    locationName: $locationName
    address: $address
    secondary: $secondary
    city: $city
    state: $state
    zipCode: $zipCode
    tags: $tags
  ) {
    _id
    postText
    username
    locationName
    address
    secondary
    city
    state
    zipCode
    tags
  }
}
`;

// Export DELETE_POST
export const DELETE_POST = gql`
  mutation deletePost($_id: ID!) {
    deletePost(_id: $id) {
      _id
      postText
      username
      locationName
      address
      secondary
      fullAddress
      commentCount
      comments {
        _id
        commentBody
        username
      }
    }
  }
`;

// Export ADD COMMENT
export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentBody: String!) {
    addComment(postId: $postId, commentBody: $commentBody) {
      _id
      postText
      username
      locationName
      address
      secondary
      city
      state
      zipCode
      tags
      comments {
        _id
        commentBody
        username
      }
    }
  }
`;
