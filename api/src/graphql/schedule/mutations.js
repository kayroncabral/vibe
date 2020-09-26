import { ScheduleStatus } from 'src/utils/enums'

export const createSchedule = async (parent, { input }, context, info) => {
  return {
    ...input,
    patient: '123123',
    status: ScheduleStatus.SCHEDULED
  }
}
