import { startOfDay, endOfDay } from 'date-fns'

import { Schedule } from 'src/models'

export const schedules = async (parent, { input }, context, info) => {
  const conditions = { doctor: input.doctor }

  if (input?.filter?.status) conditions.status = { $in: input.filter.status }

  if (input?.filter?.start || input?.filter?.end) {
    conditions.date = {}

    if (input.filter?.start) {
      conditions.date.$gte = startOfDay(new Date(input.filter.start)).toISOString()
    }

    if (input.filter?.end) {
      conditions.date.$lte = endOfDay(new Date(input.filter.end)).toISOString()
    }
  }

  const schedules = await Schedule.find(conditions).sort({ status: -1 })

  return schedules
}
