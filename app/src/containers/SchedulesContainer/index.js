import React from 'react'

import { useQuery, useMutation } from '@apollo/client'
import { startOfDay, endOfDay } from 'date-fns'

import SchedulesView from 'src/views/SchedulesView'

import { CREATE_APPOINTMENT } from 'src/graphql/appointment/gqls'
import { SCHEDULES, MISSING_PATIENT } from 'src/graphql/schedule/gqls'

const now = new Date()

const SchedulesContainer = () => {
  const { loading: schedulesLoading, data, refetch } = useQuery(SCHEDULES, {
    variables: {
      input: {
        filter: {
          start: startOfDay(now).toISOString(),
          end: endOfDay(now).toISOString(),
          status: null
        }
      }
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only'
  })
  const [missingPatient, { loading: missingPatientLoading }] = useMutation(
    MISSING_PATIENT
  )
  const [
    createAppointment,
    { loading: createAppointmentLoading }
  ] = useMutation(CREATE_APPOINTMENT, {
    refetchQueries: [{ query: SCHEDULES }]
  })

  const handleFilterApply = async (filter) => {
    const variables = { input: { filter } }

    try {
      await refetch(variables)
    } catch (error) {
      console.log(error)
    }
  }

  const handleMissingPatient = async (schedule) => {
    const variables = { input: { schedule: schedule.id } }

    try {
      await missingPatient({ variables })
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
      missingPatientLoading={missingPatientLoading}
      createAppointmentLoading={createAppointmentLoading}
      schedules={data?.schedules ?? []}
      onFilterApply={handleFilterApply}
      onMissingPatient={handleMissingPatient}
      onCreateAppointment={handleCreateAppointment}
    />
  )
}

export default SchedulesContainer
