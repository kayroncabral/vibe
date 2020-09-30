import { differenceInHours } from 'date-fns'
import { ObjectID } from 'mongodb'

import { Schedule } from 'src/models'

import { ScheduleStatus } from 'src/utils/enums'

export const createSchedules = async (parent, { input }, context, info) => {
  const schedulesInput = input.dates.map((date) => ({ doctor: input.doctor, date }))

  const schedules = await Schedule.insertMany(schedulesInput)

  return schedules
}

export const missingPatient = async (parent, { input }, context, info) => {
  if (!ObjectID.isValid(input.schedule)) throw new Error('Id do horário não é válido')
  if (!ObjectID.isValid(input.doctor)) throw new Error('Id do médico não é válido')

  const schedule = await Schedule.findById(input.schedule)
  if (!schedule) throw new Error('Horário não encontrado')
  if (
    schedule.doctor.toString() !== input.doctor ||
    schedule.status !== ScheduleStatus.BOOKED.toUpperCase()
  ) {
    throw new Error('Não é possível marcar ausência')
  }

  schedule.status = ScheduleStatus.MISSED

  await schedule.save()

  return schedule
}

export const schedule = async (parent, { input }, context, info) => {
  if (!ObjectID.isValid(input.schedule)) throw new Error('Id do horário não é válido')
  if (!ObjectID.isValid(input.patient)) throw new Error('Id do paciente não é válido')

  const schedule = await Schedule.findById(input.schedule)
  if (!schedule) throw new Error('Horário não encontrado')
  if (schedule.status !== ScheduleStatus.AVAILABLE.toUpperCase()) {
    throw new Error('Horário indisponível')
  }

  schedule.patient = input.patient
  schedule.status = ScheduleStatus.BOOKED
  schedule.scheduledAt = new Date()

  await schedule.save()

  return schedule
}

export const cancelSchedule = async (parent, { input }, context, info) => {
  if (!ObjectID.isValid(input.schedule)) throw new Error('Id do horário não é válido')
  if (!ObjectID.isValid(input.patient)) throw new Error('Id do paciente não é válido')

  const schedule = await Schedule.findById(input.schedule)
  if (!schedule) throw new Error('Horário não encontrado')
  if (
    schedule.patient.toString() !== input.patient ||
    schedule.status !== ScheduleStatus.BOOKED.toUpperCase()
  ) {
    throw new Error('Não é possível cancelar')
  }

  if (differenceInHours(schedule.date, Date.now()) < 24) {
    throw new Error('Só é possível cancelar com 24h de antecedência')
  }

  schedule.status = ScheduleStatus.CANCELED
  schedule.canceleddAt = new Date()

  await schedule.save()

  return schedule
}
