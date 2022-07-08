<<<<<<< HEAD
import { gql } from '@apollo/client';
=======
//TODO: KAIJAM
>>>>>>> develop

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
