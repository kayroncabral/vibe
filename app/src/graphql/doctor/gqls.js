import { gql } from '@apollo/client'

export const DOCTORS = gql`
  query {
    doctors {
      id
      name
      sex
    }
  }
`
