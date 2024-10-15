import { gql } from "@apollo/client";

export const USERS_QUERY = gql`
    query GetUsers {
        users {
            id
            email
            fullName
            picture
        }
    }
`

export const USER_QUERY = gql`
    query = GetUser($id: Int!) {
        user(id: $id) {
            id
            email
            fullName
            picture
        }
    }
`