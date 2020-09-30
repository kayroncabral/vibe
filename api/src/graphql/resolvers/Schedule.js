import { Patient, Doctor, Appointment } from 'src/models'

const Schedule = {
  doctor: (parent, args, context, info) => {
    return Doctor.findById(parent.doctor)
  },
  patient: (parent, args, context, info) => {
    return Patient.findById(parent.patient)
  },
  appointment: (parent, args, context, info) => {
    return Appointment.findById(parent.appointment)
  }
}

export default Schedule
