import React from 'react'

import { useQuery, useMutation } from '@apollo/client'

import SchedulesView from 'src/views/SchedulesView'

import { SCHEDULES, CANCEL_SCHEDULE } from 'src/graphql/schedule/gqls'

const MySchedulesContainer = () => {
  const { loading: schedulesLoading, data } = useQuery(SCHEDULES, {
    fetchPolicy: 'network-only'
  })
  const [cancelSchedule, { loading: cancelScheduleLoading }] = useMutation(
    CANCEL_SCHEDULE
  )

  const handleCancelSchedule = async (schedule) => {
    const variables = { input: { schedule: schedule.id } }

    try {
      await cancelSchedule({ variables })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SchedulesView
      schedulesLoading={schedulesLoading}
      cancelScheduleLoading={cancelScheduleLoading}
      schedules={data?.schedules ?? []}
      onCancelSchedule={handleCancelSchedule}
      doctor={false}
    />
  )
}

export default MySchedulesContainer
