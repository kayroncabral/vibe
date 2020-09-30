import { gql } from '@apollo/client'

export const CREATE_APPOINTMENT = gql`
  mutation($input: CreateAppointmentInput!) {
    createAppointment(input: $input) {
      id
      schedule {
        id
      }
      icd
      description
    }
  }
`
