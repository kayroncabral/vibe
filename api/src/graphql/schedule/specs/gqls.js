export const SCHEDULES = `
  query($input: SchedulesInput!) {
    schedules(input: $input) {
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
      appointment {
        id
        icd
        description
      }
      date
      status
      scheduledAt
      canceledAt
    }
  }
`

export const SCHEDULE = `
  mutation($input: ScheduleInput!) {
    schedule(input: $input) {
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
      date
      status
      scheduledAt
    }
  }
`

export const CANCEL_SCHEDULE = `
  mutation($input: CancelScheduleInput!) {
    cancelSchedule(input: $input) {
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
      date
      status
      scheduledAt
    }
  }
`
