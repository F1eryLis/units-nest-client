import { gql } from "@apollo/client";

export const PHONELISTS_QUERY = gql`
    query GetPhoneLists {
        phoneLists {
            id
            name
            phones
            userId
        }
    }
`

export const PHONELIST_QUERY = gql`
    query GetPhoneList($id: Int!) {
        phoneList(id: $id) {
            id
            name
            phones
            userId
        }
    }
`