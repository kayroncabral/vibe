export const CREATE_APPOINTMENT = `
  mutation($input: CreateAppointmentInput!) {
    createAppointment(input: $input) {
      id
      doctor {
        id
        name
        sex
        birthday
        role
        crm
      }
      patient {
        id
        name
        sex
        birthday
        role
        federalTaxNumber
      }
      schedule {
        id
        date
        status
        scheduledAt
      }
      icd
      description
    }
  }
`
