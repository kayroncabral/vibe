import React from 'react'

import { useQuery, useMutation } from '@apollo/client'

import SchedulesView from 'src/views/SchedulesView'

import { SCHEDULES, CANCEL_SCHEDULE } from 'src/graphql/schedule/gqls'

const MySchedulesContainer = () => {
  const { loading: schedulesLoading, data } = useQuery(SCHEDULES, {
    variables: {
      input: {
        doctor: '5f734943771a8e07a89434c7'
      }
    },
    notifyOnNetworkStatusChange: true
  })
  const [cancelSchedule, { loading: cancelScheduleLoading }] = useMutation(
    CANCEL_SCHEDULE
  )

  const handleCancelSchedule = async (schedule) => {
    const variables = {
      input: { patient: '5f734c4b771a8e07a89434ca', schedule: schedule.id }
    }

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
    />
  )
}

export default MySchedulesContainer
