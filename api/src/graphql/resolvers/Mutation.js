import { createDoctor } from 'src/graphql/doctor/mutations'
import { createPatient } from 'src/graphql/patient/mutations'
import { createSchedules } from 'src/graphql/schedule/mutations'

const Mutation = {
  createDoctor,

  createPatient,

  createSchedules
}

export default Mutation
