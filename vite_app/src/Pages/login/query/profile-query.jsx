import { gql } from "@apollo/client"

// login
export const GET_USERS = gql`
query users{
    users{
      username
      password
    }
}
`;

// register
export const ADD_USERS = gql`
mutation users($object: users_insert_input!) {
  insert_users_one(object: $object) {
    uuid
    username
    password
  }
}
`;