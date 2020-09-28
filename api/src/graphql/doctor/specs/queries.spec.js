import { createTestClient } from 'apollo-server-integration-testing'
import { serial as test } from 'ava'
import { server as apolloServer } from 'src'

import { Doctor } from 'src/models'

import { GET_DOCTORS } from 'src/graphql/doctor/specs/gqls'

import { DOCTOR_1, DOCTOR_2 } from 'src/test/payloads/doctors'

test.beforeEach(async (t) => {
  await Doctor.deleteMany({})

  await new Doctor(DOCTOR_1).save()
  await new Doctor(DOCTOR_2).save()
})

test.afterEach(async (t) => {
  await Doctor.deleteMany({})
})

test('should get doctors', async (t) => {
  const { query } = createTestClient({ apolloServer })
  const response = await query(GET_DOCTORS)

  t.is(response.errors, undefined)
  t.not(response.data, null)
  t.not(response.data.doctors, null)
  t.is(response.data.doctors.length, 2)
  const { _id: id1, ...doctor1 } = DOCTOR_1
  t.deepEqual({ id: id1, ...doctor1 }, response.data.doctors[0])
  const { _id: id2, ...doctor2 } = DOCTOR_2
  t.deepEqual({ id: id2, ...doctor2 }, response.data.doctors[1])
})
