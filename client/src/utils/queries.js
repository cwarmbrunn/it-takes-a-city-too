import { gql } from "@apollo/client";

export const QUERY_ALL_POSTS = gql`
  query {
    allposts {
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

export const QUERY_ALL_USERS = gql`
  query {
    users {
      _id
      username
      email
      posts {
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
  }
`;

export const QUERY_ONE_USER = gql`
  query User($username: String!) {
    user(username: $username) {
      _id
      username
      email
      posts {
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
  }
`;

export const QUERY_RESOURCES = gql`
  query resources($username: String) {
    resources(username: $username) {
      _id
      username
      replyCount
      replies {
        _id
        username
        replyBody
      }
    }
  }
`;
// kaijam please check these last two queries

export const QUERY_TAGS = gql`
  query {
    Tag {
      tagBody
    }
  }
`;

export const QUERY_ALL_LOCATIONS = gql`
  query {
    Post {
      location
    }
  }
`;
