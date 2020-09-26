import { doctors } from 'src/graphql/doctor/queries'
import { schedule, schedules } from 'src/graphql/schedule/queries'

const Query = {
  doctors,

  schedule,
  schedules
}

export default Query
