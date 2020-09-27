import { differenceInHours } from 'date-fns'

import { Schedule } from 'src/models'

import { ScheduleStatus } from 'src/utils/enums'

export const createSchedules = async (parent, { input }, context, info) => {
  const schedulesInput = input.dates.map((date) => {
    const doctor = '5f70c3a4d86a530a98f904ce'
    return { doctor, date }
  })

  const schedules = await Schedule.insertMany(schedulesInput)

  return schedules
}

export const schedule = async (parent, { input }, context, info) => {
  const schedule = await Schedule.findById(input.schedule)
  if (!schedule) throw new Error('Horário não encontrado')
  if (schedule.status !== ScheduleStatus.AVAILABLE.toUpperCase()) {
    throw new Error('Hoário indisponível')
  }

  schedule.patient = input.patient
  schedule.status = ScheduleStatus.SCHEDULED
  schedule.scheduledAt = Date.now()

  await schedule.save()

  return schedule
}

export const cancelSchedule = async (parent, { input }, context, info) => {
  const schedule = await Schedule.findById(input.schedule)
  if (!schedule) throw new Error('Hoário não encontrado')
  if (
    schedule.patient.toString() !== input.patient ||
    schedule.status !== ScheduleStatus.SCHEDULED.toUpperCase()
  ) {
    throw new Error('Não é possível cancelar')
  }

  if (differenceInHours(schedule.date, Date.now()) < 24) {
    throw new Error('Só é possível cancelar com 24h de antecedência')
  }

  schedule.status = ScheduleStatus.CANCELED
  schedule.canceleddAt = Date.now()

  await schedule.save()

  return schedule
}
