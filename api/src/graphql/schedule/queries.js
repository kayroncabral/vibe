import { startOfDay, endOfDay } from 'date-fns'

import { Schedule } from 'src/models'

import { Roles } from 'src/utils/enums'

export const schedules = async (parent, { input }, { user }, info) => {
  const conditions = {}

  if (user.role === Roles.DOCTOR) {
    conditions.doctor = user.id
  } else if (user.role === Roles.PATIENT) {
    conditions.patient = user.id
  }

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
