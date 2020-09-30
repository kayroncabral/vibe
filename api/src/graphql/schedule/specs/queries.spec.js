import { createTestClient } from 'apollo-server-testing'
import { serial as test } from 'ava'
import { server } from 'src'

import { Doctor, Patient, Schedule } from 'src/models'

import { SCHEDULES } from 'src/graphql/schedule/specs/gqls'

import { DOCTOR } from 'src/test/payloads/doctors'
import { PATIENT } from 'src/test/payloads/patients'
import {
  AVAILABLE_SCHEDULE,
  SCHEDULED_SCHEDULE,
  CANCELED_SCHEDULE
} from 'src/test/payloads/schedules'

test.beforeEach(async (t) => {
  await Doctor.deleteMany({})
  await Patient.deleteMany({})
  await Schedule.deleteMany({})

  await new Doctor(DOCTOR).save()
  await new Patient(PATIENT).save()
  await new Schedule(SCHEDULED_SCHEDULE).save()
  await new Schedule(CANCELED_SCHEDULE).save()
  await new Schedule(AVAILABLE_SCHEDULE).save()
})

test.afterEach.always(async (t) => {
  await Doctor.deleteMany({})
  await Patient.deleteMany({})
  await Schedule.deleteMany({})
})

test('should get schedules', async (t) => {
  const { query } = createTestClient(server)
  const input = { doctor: DOCTOR._id }
  const response = await query({ query: SCHEDULES, variables: { input } })

  t.is(response.errors, undefined)
  t.not(response.data, null)
  t.not(response.data.schedules, null)
  t.is(response.data.schedules.length, 3)

  const {
    _id: scheduledScheduleId,
    doctor: scheduledScheduleDoctorData,
    patient: scheduledSchedulePatientData,
    ...scheduledSchedule
  } = SCHEDULED_SCHEDULE
  const { _id: doctorId, ...doctorRest } = DOCTOR
  const doctor = { id: doctorId, ...doctorRest }
  const { _id: patientId, ...patientRest } = PATIENT
  const patient = { id: patientId, ...patientRest }
  t.deepEqual(
    { id: scheduledScheduleId, doctor, patient, canceledAt: null, ...scheduledSchedule },
    response.data.schedules[0]
  )

  const {
    _id: canceledScheduleId,
    doctor: canceledScheduleDoctorData,
    patient: canceledScheduledPatientData,
    canceledAt,
    ...canceledSchedule
  } = CANCELED_SCHEDULE
  const { canceledAt: canceledAtResponse, ...canceledScheduleResponse } = response.data.schedules[1]
  t.deepEqual(
    { id: canceledScheduleId, doctor, patient, ...canceledSchedule },
    canceledScheduleResponse
  )
  t.not(canceledAtResponse, null)

  const {
    _id: availableScheduleId,
    doctor: availableScheduleDoctorData,
    ...availableSchedule
  } = AVAILABLE_SCHEDULE
  t.deepEqual(
    {
      id: availableScheduleId,
      doctor,
      patient: null,
      scheduledAt: null,
      canceledAt: null,
      ...availableSchedule
    },
    response.data.schedules[2]
  )
})
