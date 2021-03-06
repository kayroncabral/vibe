import { createTestClient } from 'apollo-server-integration-testing'
import { serial as test } from 'ava'
import { server as apolloServer } from 'src'

import { Doctor, Patient, Schedule, Appointment } from 'src/models'

import { CREATE_APPOINTMENT } from 'src/graphql/appointment/specs/gqls'

import { APPOINTMENT_INPUT } from 'src/test/payloads/appointments'
import { DOCTOR } from 'src/test/payloads/doctors'
import { PATIENT } from 'src/test/payloads/patients'
import { SCHEDULE } from 'src/test/payloads/schedules'

import { generateToken } from 'src/utils/authentication'
import { ScheduleStatus } from 'src/utils/enums'

let headers = null

test.beforeEach(async (t) => {
  await Doctor.deleteMany({})
  await Patient.deleteMany({})
  await Schedule.deleteMany({})
  await Appointment.deleteMany({})

  const doctor = await new Doctor(DOCTOR).save()
  await new Patient(PATIENT).save()
  await new Schedule(SCHEDULE).save()
  headers = { Authorization: generateToken({ userId: doctor._id }) }
})

test.afterEach.always(async (t) => {
  await Doctor.deleteMany({})
  await Patient.deleteMany({})
  await Schedule.deleteMany({})
  await Appointment.deleteMany({})
})

test.only('should create appointment', async (t) => {
  const { mutate } = createTestClient({ apolloServer, extendMockRequest: { headers } })
  const input = APPOINTMENT_INPUT
  const response = await mutate(CREATE_APPOINTMENT, { variables: { input } })

  t.is(response.errors, undefined)
  t.not(response.data, null)
  t.not(response.data.createAppointment, null)

  const {
    doctor: doctorData,
    patient: patientData,
    schedule: scheduleData,
    ...appointment
  } = APPOINTMENT_INPUT
  const { _id: doctorId, ...doctorRest } = DOCTOR
  const doctor = { id: doctorId, ...doctorRest }
  const { _id: patientId, ...patientRest } = PATIENT
  const patient = { id: patientId, ...patientRest }
  const {
    _id: scheduleId,
    doctor: doctorScheduleData,
    patient: patientScheduleData,
    ...scheduleRest
  } = SCHEDULE
  const schedule = {
    id: scheduleId,
    ...scheduleRest,
    status: ScheduleStatus.APPOINTMENT_DONE.toUpperCase()
  }

  const {
    id: appointmentIdResponse,
    ...createAppointmentResponse
  } = response.data.createAppointment
  t.deepEqual(
    {
      doctor,
      patient,
      schedule,
      ...appointment
    },
    createAppointmentResponse
  )
  t.not(appointmentIdResponse, null)
})
