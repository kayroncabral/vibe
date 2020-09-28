import { Appointment } from 'src/models'

export const appointments = async (parent, { input }, context, info) => {
  return Appointment.find({})
}
