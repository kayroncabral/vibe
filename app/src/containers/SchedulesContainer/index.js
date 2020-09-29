import React from 'react'

import { useQuery } from '@apollo/client'

import SchedulesView from 'src/views/SchedulesView'

import { SCHEDULES } from 'src/graphql/schedule/gqls'

const now = new Date().toISOString()

const SchedulesContainer = () => {
  const { loading, data, refetch } = useQuery(SCHEDULES, {
    variables: {
      input: {
        doctor: '5f734879771a8e07a89434c6',
        filter: { start: now, end: now, status: null }
      }
    },
    notifyOnNetworkStatusChange: true
  })

  const handleFilterApply = (filter) => {
    const variables = { input: { doctor: '5f734879771a8e07a89434c6', filter } }

    try {
      refetch(variables)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SchedulesView
      loading={loading}
      schedules={data?.schedules ?? []}
      onFilterApply={handleFilterApply}
    />
  )
}

export default SchedulesContainer
