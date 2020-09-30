import React from 'react'

import { useQuery } from '@apollo/client'
import { format } from 'date-fns'

import SchedulesView from 'src/views/SchedulesView'

import { SCHEDULES } from 'src/graphql/schedule/gqls'

const now = format(new Date(), 'yyyy-MM-dd')

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
