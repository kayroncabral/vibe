import { gql } from '@apollo/client'

export const SCHEDULE = gql`
  mutation($input: ScheduleInput!) {
    schedule(input: $input) {
      id
      status
    }
  }
`

export const SCHEDULES = gql`
  query($input: SchedulesInput!) {
    schedules(input: $input) {
      id
      patient {
        name
        sex
        birthday
        federalTaxNumber
      }
      date
      status
      scheduledAt
    }
  }
`
