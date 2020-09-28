import { createTestClient } from 'apollo-server-testing'
import { serial as test } from 'ava'
import { server } from 'src'

import { Doctor, Patient, Schedule } from 'src/models'

import { SCHEDULE, CANCEL_SCHEDULE } from 'src/graphql/schedule/specs/gqls'

import { DOCTOR } from 'src/test/payloads/doctors'
import { PATIENT } from 'src/test/payloads/patients'
import { AVAILABLE_SCHEDULE, SCHEDULED_SCHEDULE } from 'src/test/payloads/schedules'

import { ScheduleStatus } from 'src/utils/enums'

test.beforeEach(async (t) => {
  await Doctor.deleteMany({})
  await Patient.deleteMany({})
  await Schedule.deleteMany({})

  await new Doctor(DOCTOR).save()
  await new Patient(PATIENT).save()
  await new Schedule(AVAILABLE_SCHEDULE).save()
  await new Schedule(SCHEDULED_SCHEDULE).save()
})

test.afterEach.always(async (t) => {
  await Doctor.deleteMany({})
  await Patient.deleteMany({})
  await Schedule.deleteMany({})
})

test('should schedule', async (t) => {
  const { mutate } = createTestClient(server)
  const input = { schedule: AVAILABLE_SCHEDULE._id, patient: PATIENT._id }
  const response = await mutate({ query: SCHEDULE, variables: { input } })

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
      status: ScheduleStatus.SCHEDULED.toUpperCase()
    },
    scheduleResponse
  )

  t.not(scheduledAt, null)
})

test('should cancel a schedule', async (t) => {
  const { mutate } = createTestClient(server)
  const input = { schedule: SCHEDULED_SCHEDULE._id, patient: PATIENT._id }
  const response = await mutate({ query: CANCEL_SCHEDULE, variables: { input } })

  t.is(response.errors, undefined)
  t.not(response.data, null)
  t.not(response.data.cancelSchedule, null)

  const {
    _id: scheduleId,
    doctor: doctorData,
    patient: canceledScheduledPatientData,
    ...schedule
  } = SCHEDULED_SCHEDULE
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
