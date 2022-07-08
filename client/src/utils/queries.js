import { gql } from '@apollo/client';

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
