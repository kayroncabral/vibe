import { addDays, subDays, startOfDay, endOfDay } from 'date-fns'

import { Schedule } from 'src/models'

const Doctor = {
  schedules: async (parent, context, info) => {
    const now = new Date()
    const date = { $gte: startOfDay(subDays(now, 1)), $lte: endOfDay(addDays(now, 4)) }

    const conditions = { doctor: parent._id, date }
    const schedules = await Schedule.find(conditions).sort({ date: 1 })

    return schedules
  }
}

export default Doctor
