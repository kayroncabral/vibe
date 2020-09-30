import { createTestClient } from 'apollo-server-integration-testing'
import { serial as test } from 'ava'
import { server as apolloServer } from 'src'

import { Doctor, Patient, Schedule } from 'src/models'

import { SCHEDULE, CANCEL_SCHEDULE } from 'src/graphql/schedule/specs/gqls'

import { DOCTOR } from 'src/test/payloads/doctors'
import { PATIENT } from 'src/test/payloads/patients'
import { AVAILABLE_SCHEDULE, BOOKED_SCHEDULE } from 'src/test/payloads/schedules'

import { generateToken } from 'src/utils/authentication'
import { ScheduleStatus } from 'src/utils/enums'

let headers = null

test.beforeEach(async (t) => {
  await Doctor.deleteMany({})
  await Patient.deleteMany({})
  await Schedule.deleteMany({})

  await new Doctor(DOCTOR).save()
  const patient = await new Patient(PATIENT).save()
  await new Schedule(AVAILABLE_SCHEDULE).save()
  await new Schedule(BOOKED_SCHEDULE).save()
  headers = { Authorization: generateToken({ userId: patient._id }) }
})

test.afterEach.always(async (t) => {
  await Doctor.deleteMany({})
  await Patient.deleteMany({})
  await Schedule.deleteMany({})
})

test('should throw error if schedule id is not valid when schedule', async (t) => {
  const { mutate } = createTestClient({ apolloServer, extendMockRequest: { headers } })
  const input = { schedule: '123' }
  const response = await mutate(SCHEDULE, { variables: { input } })

  t.not(response.errors, null)
  t.is(response.data, null)
  t.is(response.errors[0].message, 'Id do horário não é válido')
})

test('should schedule', async (t) => {
  const { mutate } = createTestClient({ apolloServer, extendMockRequest: { headers } })
  const input = { schedule: AVAILABLE_SCHEDULE._id }
  const response = await mutate(SCHEDULE, { variables: { input } })

  t.is(response.errors, undefined)
  t.not(response.data, null)
  t.not(response.data.schedule, null)

  const {
    _id: scheduleId,
    doctor: doctorData,
    patient: canceledScheduledPatientData,
    ...schedule
  } = AVAILABLE_SCHEDULE
  const { _id: doctorId, ...doctorRest } = DOCTOR
  const doctor = { id: doctorId, ...doctorRest }
  const { _id: patientId, ...patientRest } = PATIENT
  const patient = { id: patientId, ...patientRest }

  const { scheduledAt, ...scheduleResponse } = response.data.schedule

  t.deepEqual(
    {
      id: scheduleId,
      doctor,
      patient,
      ...schedule,
      status: ScheduleStatus.BOOKED.toUpperCase()
    },
    scheduleResponse
  )

  t.not(scheduledAt, null)
})

test('should cancel a schedule', async (t) => {
  const { mutate } = createTestClient({ apolloServer, extendMockRequest: { headers } })
  const input = { schedule: BOOKED_SCHEDULE._id }
  const response = await mutate(CANCEL_SCHEDULE, { variables: { input } })

  t.is(response.errors, undefined)
  t.not(response.data, null)
  t.not(response.data.cancelSchedule, null)

  const {
    _id: scheduleId,
    doctor: doctorData,
    patient: canceledScheduledPatientData,
    ...schedule
  } = BOOKED_SCHEDULE
  const { _id: doctorId, ...doctorRest } = DOCTOR
  const doctor = { id: doctorId, ...doctorRest }
  const { _id: patientId, ...patientRest } = PATIENT
  const patient = { id: patientId, ...patientRest }

  t.deepEqual(
    {
      id: scheduleId,
      doctor,
      patient,
      ...schedule,
      status: ScheduleStatus.CANCELED.toUpperCase()
    },
    response.data.cancelSchedule
  )
})
