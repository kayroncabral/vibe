import { doctors } from 'src/graphql/doctor/queries'
import { patients } from 'src/graphql/patient/queries'
import { schedules } from 'src/graphql/schedule/queries'

const Query = {
  doctors,

  patients,

  schedules
}

export default Query
