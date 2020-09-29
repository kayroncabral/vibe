import { startOfDay, endOfDay } from 'date-fns'

import { Schedule } from 'src/models'

export const schedules = async (parent, { input }, context, info) => {
  const conditions = { doctor: input.doctor }

  if (input?.filter?.status) conditions.status = { $in: input.filter.status }

  // Default date values
  conditions.date = {
    $gte: startOfDay(Date.now()).toISOString(),
    $lte: endOfDay(Date.now()).toISOString()
  }

  if (input?.filter?.start || input?.filter?.end) {
    if (input.filter?.start) {
      const start = new Date(input.filter.start)
      conditions.date.$gte = startOfDay(start).toISOString()
    }

    if (input.filter?.end) {
      const end = new Date(input.filter.end)
      conditions.date.$lte = endOfDay(end).toISOString()
    }
  }

  const schedules = await Schedule.find(conditions)

  return schedules
}
