import { ScheduleStatus } from 'src/utils/enums'

export const schedule = async () => {
  return {
    doctor: '123123',
    patient: '123123',
    date: '28/09/2020',
    hour: '13:00',
    status: ScheduleStatus.SCHEDULED
  }
}

export const schedules = async () => {
  return [
    {
      doctor: '123123',
      patient: '123123',
      date: '28/09/2020',
      hour: '13:00',
      status: ScheduleStatus.SCHEDULED
    }
  ]
}
