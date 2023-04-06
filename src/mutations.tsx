import { gql } from "@apollo/client"

export const REGISTRATION = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $username: String!
    $password: String!
    $confirmedPassword: String!
  ) {
    createUser(
      first_name: $firstName
      last_name: $lastName
      username: $username
      password: $password
      confirmed_password: $confirmedPassword
    ) {
      username
    }
  }
`