import { Patient, Doctor, Schedule } from 'src/models'

const Appointment = {
  doctor: (parent, args, context, info) => {
    return Doctor.findById(parent.doctor)
  },
  patient: (parent, args, context, info) => {
    return Patient.findById(parent.patient)
  },
  schedule: (parent, args, context, info) => {
    return Schedule.findById(parent.schedule)
  }
}

export default Appointment
