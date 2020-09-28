import { startOfDay, endOfDay } from 'date-fns'

import { Schedule } from 'src/models'

export const schedules = async (parent, { input }, context, info) => {
  const conditions = { doctor: input.doctor }

  if (input?.filter?.status) conditions.status = { $in: input.filter.status }

  if (input?.filter?.start || input?.filter?.end) {
    conditions.date = {}

    if (input.filter?.start) {
      const start = new Date(input.filter.start)
      conditions.date.$gte = startOfDay(start).toISOString()

      if (!input.filter?.end) conditions.date.$lte = endOfDay(start).toISOString()
    }

    if (input.filter?.end) {
      const end = new Date(input.filter.end)
      conditions.date.$lte = endOfDay(end).toISOString()

      if (!input.filter?.start) conditions.date.$gte = startOfDay(end).toISOString()
    }
  }

  const schedules = await Schedule.find(conditions)

  return schedules
}
