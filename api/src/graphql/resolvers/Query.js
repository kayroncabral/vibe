import { doctors } from 'src/graphql/doctor/queries'
import { patients } from 'src/graphql/patient/queries'
import { schedule, schedules } from 'src/graphql/schedule/queries'

const Query = {
  doctors,

  patients,

  schedule,
  schedules
}

export default Query
