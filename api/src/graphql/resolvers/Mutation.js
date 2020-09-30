import { createAppointment } from 'src/graphql/appointment/mutations'
import { createDoctor } from 'src/graphql/doctor/mutations'
import { createPatient } from 'src/graphql/patient/mutations'
import {
  createSchedules,
  schedule,
  missingPatient,
  cancelSchedule
} from 'src/graphql/schedule/mutations'

const Mutation = {
  createDoctor,
  createPatient,
  createSchedules,
  schedule,
  missingPatient,
  cancelSchedule,
  createAppointment
}

export default Mutation
