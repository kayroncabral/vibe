import { startOfDay, endOfDay } from 'date-fns'

import { Schedule } from 'src/models'

export const schedule = async () => {
  return Schedule.findOne({})
}

export const schedules = async (parent, { input }, context, info) => {
  const doctor = '5f70c3a4d86a530a98f904ce'

  const conditions = { doctor /* $text: { $search: 'Kayron' } */ }

  if (input.filter?.status) conditions.status = { $in: input.filter.status }

  if (input.filter?.start || input.filter?.end) {
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

  return Schedule.find(conditions).populate('patient')
}
