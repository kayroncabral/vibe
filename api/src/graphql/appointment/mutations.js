import { Appointment, Schedule } from 'src/models'

import { ScheduleStatus } from 'src/utils/enums'

export const createAppointment = async (parent, { input }, context, info) => {
  const schedule = await Schedule.findById(input.schedule)
  if (!schedule) throw new Error('Horário não encontrado')

  input.doctor = schedule.doctor
  input.patient = schedule.patient
  const appointment = new Appointment(input)
  await appointment.save()

  schedule.status = ScheduleStatus.APPOINTMENT_DONE
  await schedule.save()

  return appointment
}
