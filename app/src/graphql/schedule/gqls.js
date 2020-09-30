import { gql } from '@apollo/client'

export const SCHEDULE = gql`
  mutation($input: ScheduleInput!) {
    schedule(input: $input) {
      id
      status
    }
  }
`

export const CANCEL_SCHEDULE = gql`
  mutation($input: CancelScheduleInput!) {
    cancelSchedule(input: $input) {
      id
      status
      canceledAt
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
      doctor {
        name
        sex
        specializations {
          name
        }
      }
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
