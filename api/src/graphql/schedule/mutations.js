import { Schedule } from 'src/models'

export const createSchedules = async (parent, { input }, context, info) => {
  const schedulesInput = input.dates.map((date) => {
    const doctor = '5f70c3a4d86a530a98f904ce'
    return { doctor, date }
  })

  const schedules = await Schedule.insertMany(schedulesInput)

  return schedules
}
