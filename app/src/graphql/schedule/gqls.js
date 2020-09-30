import { gql } from '@apollo/client'

export const SCHEDULE = gql`
  mutation($input: ScheduleInput!) {
    schedule(input: $input) {
      id
      status
    }
  }
`

export const MISSING_PATIENT = gql`
  mutation($input: MissingPatientInput!) {
    missingPatient(input: $input) {
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
      appointment {
        id
        icd
        description
      }
      date
      status
      scheduledAt
    }
  }
`
