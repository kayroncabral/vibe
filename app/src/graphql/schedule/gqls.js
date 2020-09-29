import { gql } from '@apollo/client'

export const SCHEDULE = gql`
  mutation($input: ScheduleInput!) {
    schedule(input: $input) {
      id
      status
    }
  }
`
