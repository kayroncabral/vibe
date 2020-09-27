import { Schedule } from 'src/models'

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
  return Schedule.find({})
}
