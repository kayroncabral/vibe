import React from 'react'

import { useQuery, useMutation } from '@apollo/client'

import DoctorsView from 'src/views/DoctorsView'

import { DOCTORS } from 'src/graphql/doctor/gqls'
import { SCHEDULE } from 'src/graphql/schedule/gqls'

const DoctorsContainer = () => {
  const { loading: doctorsLoading, data } = useQuery(DOCTORS)
  const [schedule, { loading: scheduleLoading }] = useMutation(SCHEDULE)

  const handleSchedule = async ({ id }) => {
    const variables = {
      input: { schedule: id, patient: '5f729992794bea0587be9604' }
    }

    try {
      await schedule({ variables })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DoctorsView
      doctorsLoading={doctorsLoading}
      scheduleLoading={scheduleLoading}
      doctors={data?.doctors ?? []}
      onSchedule={handleSchedule}
    />
  )
}

export default DoctorsContainer
