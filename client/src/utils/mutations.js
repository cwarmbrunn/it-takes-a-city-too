import { gql } from '@apollo/client';

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

export const ADD_POST = gql`
  mutation addPost($postText: String!) {
    addPost(postText: $postText) {
      postText
      username
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentBody: String!) {
    addComment(postId: $postId, commentBody: $commentBody) {
      _id
      postText
      username
      comments {
        _id
        commentBody
        username
      }
    }
  }
`;

// Export UPDATE_RESOURCE

// From Christina //
// Not sure if we need this one?

// Requirements say we need to retrieve, update, add, and delete data

// Export SAVE_RESOURCE

// Export DELETE_RESOURCE
