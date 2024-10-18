import { gql } from "@apollo/client";

export const GET_COMPANIES = gql`
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

export const GET_COMPANY = gql`
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

export const CREATE_COMPANY = gql`
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

export const GET_PHONELISTS = gql`
    query GetPhoneLists {
        phoneLists {
            id
            name
            phones
            userId
        }
    }
`

export const GET_PHONELIST = gql`
    query GetPhoneList($id: Int!) {
        phoneList(id: $id) {
            id
            name
            phones
            userId
        }
    }
`

export const GET_SOUNDFILES = gql`
    query GetSoundFiles {
        soundFiles {
            id
            name
            filePath
            userId
        }
    }
`

export const GET_SOUNDFILE = gql`
    query GetSoundFile($id: Int!) {
        soundFile(id: $id) {
            id
            name
            filePath
            userId
        }
    }
`

export const GET_SOUNDFILES_AND_PHONELISTS = gql(`
    query GetSoundFilesAndPhoneLists {
        soundfiles {
            id
            name
            filePath
            userId
        }
        phonelists {
            id
            name
            phones
            userId
        }
    }
`);

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