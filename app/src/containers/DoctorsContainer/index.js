import React from 'react'

import { useQuery } from '@apollo/client'

import DoctorsView from 'src/views/DoctorsView'

import { DOCTORS } from 'src/graphql/doctor/gqls'

const DoctorsContainer = () => {
  const { loading, data } = useQuery(DOCTORS)

  return <DoctorsView loading={loading} doctors={data?.doctors ?? []} />
}

DoctorsContainer.propTypes = {}

DoctorsContainer.defaultProps = {}

export default DoctorsContainer
