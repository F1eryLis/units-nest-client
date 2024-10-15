import { gql } from "@apollo/client";

export const COMPANIES_QUERY = gql`
    query GetCompanies {
        companies {
            id
            name
            companyLimit
            dayLimit
            status
            startTime
            endTime
            days
            reaction
            soundFileId
            phonesId
            userId
        }
    }
`

export const COMPANY_QUERY = gql`
    query GetCompany($id: Int!) {
        company(id: $id) {
            id
            name
            companyLimit
            dayLimit
            status
            startTime
            endTime
            days
            reaction
            soundFileId
            phonesId
            userId
        }
    }
`

export const CREATE_COMPANY_QUERY = gql`
    mutation CreateCompany($input: CreateCompanyInput!) {
        createCompany(input: $input) {
            name
            companyLimit
            dayLimit
            status
            startTime
            endTime
            days
            reaction
            soundFileId
            phonesId
            userId
        }
    }
`