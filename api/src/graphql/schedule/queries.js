import { ScheduleStatus } from 'src/utils/enums'

export const schedule = async () => {
  return {
    doctor: '123123',
    patient: '123123',
    date: new Date('09/28/2020 13:00'),
    status: ScheduleStatus.SCHEDULED
  }
}

export const schedules = async () => {
  return [
    {
      doctor: '123123',
      patient: '123123',
      date: new Date('09/28/2020 12:00'),
      status: ScheduleStatus.SCHEDULED
    },
    {
      doctor: '123123',
      patient: '123123',
      date: new Date('09/28/2020 13:00'),
      status: ScheduleStatus.CANCELED
    },
    {
      doctor: '123123',
      date: new Date('09/28/2020 14:00')
    }
  ]
}
