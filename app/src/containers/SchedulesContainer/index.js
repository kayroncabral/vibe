import React from 'react'

import { useQuery, useMutation } from '@apollo/client'
import { format } from 'date-fns'

import SchedulesView from 'src/views/SchedulesView'

import { CREATE_APPOINTMENT } from 'src/graphql/appointment/gqls'
import { SCHEDULES } from 'src/graphql/schedule/gqls'

const now = format(new Date(), 'yyyy-MM-dd')

const SchedulesContainer = () => {
  const { loading: schedulesLoading, data, refetch } = useQuery(SCHEDULES, {
    variables: {
      input: {
        doctor: '5f734879771a8e07a89434c6',
        filter: { start: now, end: now, status: null }
      }
    },
    notifyOnNetworkStatusChange: true
  })
  const [
    createAppointment,
    { loading: createAppointmentLoading }
  ] = useMutation(CREATE_APPOINTMENT, {
    refetchQueries: [
      {
        query: SCHEDULES,
        variables: {
          input: {
            doctor: '5f734879771a8e07a89434c6',
            filter: { start: now, end: now, status: null }
          }
        }
      }
    ]
  })

  const handleFilterApply = (filter) => {
    const variables = { input: { doctor: '5f734879771a8e07a89434c6', filter } }

    try {
      refetch(variables)
    } catch (error) {
      console.log(error)
    }
  }

  const handleCreateAppointment = async (schedule, appointment) => {
    const variables = { input: { schedule: schedule.id, ...appointment } }

    try {
      await createAppointment({ variables })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SchedulesView
      schedulesLoading={schedulesLoading}
      createAppointmentLoading={createAppointmentLoading}
      schedules={data?.schedules ?? []}
      onFilterApply={handleFilterApply}
      onCreateAppointment={handleCreateAppointment}
    />
  )
}

export default SchedulesContainer
