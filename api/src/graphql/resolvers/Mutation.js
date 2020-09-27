import { createDoctor } from 'src/graphql/doctor/mutations'
import { createPatient } from 'src/graphql/patient/mutations'
import { createSchedules, schedule, cancelSchedule } from 'src/graphql/schedule/mutations'

const Mutation = {
  createDoctor,

  createPatient,

  createSchedules,
  schedule,
  cancelSchedule
}

export default Mutation
