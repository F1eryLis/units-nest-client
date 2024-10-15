import { gql } from "@apollo/client";

export const SOUNDFILES_QUERY = gql`
    query GetSoundFiles {
        soundFiles {
            id
            name
            filePath
            userId
        }
    }
`

export const SOUNDFILE_QUERY = gql`
    query GetSoundFile($id: Int!) {
        soundFile(id: $id) {
            id
            name
            filePath
            userId
        }
    }
`