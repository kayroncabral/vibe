import { Patient, Doctor } from 'src/models'

const Schedule = {
  doctor: (parent, args, context, info) => {
    return Doctor.findById(parent.doctor)
  },
  patient: (parent, args, context, info) => {
    return Patient.findById(parent.patient)
  }
}

export default Schedule
