import { gql } from "@apollo/client";

export const QUERY_ALL_POSTS = gql`
  query {
    allposts {
      _id
      postText
      username
      locationName
      address
      secondary
      fullAddress
      tags
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
        locationName
        address
        secondary
        fullAddress
        tags
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
        locationName
        address
        secondary
        fullAddress
        tags
        comments {
          _id
          commentBody
          username
        }
      }
    }
  }
`;

export const QUERY_CURRENT_USER = gql`
  query {
    me {
      _id
      username
      email
      posts {
        _id
        postText
        username
        locationName
        address
        secondary
        fullAddress
        tags
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
  query {
    allposts {
      locationName
      address
      secondary
      fullAddress
      tags
    }
  }
`;

// kaijam please check these last two queries

export const QUERY_TAGS = gql`
  query {
    tags {
      tagBody
    }
  }
`;

export const QUERY_ALL_LOCATIONS = gql`
  query {
    allposts {
      city
      state
    }
  }
`;
