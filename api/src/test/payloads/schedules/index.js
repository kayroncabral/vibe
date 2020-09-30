import { addHours, subHours } from 'date-fns'

import { APPOINTMENT } from 'src/test/payloads/appointment'
import { DOCTOR } from 'src/test/payloads/doctors'
import { PATIENT } from 'src/test/payloads/patients'

import { ScheduleStatus } from 'src/utils/enums'

const now = new Date()

export const SCHEDULE = {
  _id: '5f70f2a7dcaf370afa8053f4',
  status: ScheduleStatus.BOOKED.toUpperCase(),
  doctor: DOCTOR._id,
  date: new Date(),
  patient: PATIENT._id,
  scheduledAt: subHours(new Date(), 24)
}

export const AVAILABLE_SCHEDULE = {
  _id: '5f70f2a7dcaf370afa8053f6',
  status: ScheduleStatus.AVAILABLE.toUpperCase(),
  doctor: DOCTOR._id,
  date: new Date('2020-09-27T15:00:00.000Z')
}

export const SCHEDULED_SCHEDULE = {
  _id: '5f70f2a7dcaf370afa8053f8',
  status: ScheduleStatus.BOOKED.toUpperCase(),
  doctor: DOCTOR._id,
  date: addHours(now, 25),
  patient: PATIENT._id,
  scheduledAt: subHours(now, 24)
}

export const CANCELED_SCHEDULE = {
  _id: '5f70f2a7dcaf370afa8053fb',
  status: ScheduleStatus.CANCELED.toUpperCase(),
  doctor: DOCTOR._id,
  date: new Date('2020-09-28T23:00:00.000Z'),
  patient: PATIENT._id,
  scheduledAt: new Date('2020-09-27T20:16:24.517Z'),
  canceledAt: new Date('2020-09-27T20:22:18.286Z')
}

export const APPOINTMENT_DONE_SCHEDULE = {
  _id: '5f73d60515369801ab8a3798',
  status: ScheduleStatus.APPOINTMENT_DONE.toUpperCase(),
  doctor: DOCTOR._id,
  date: addHours(now, 25),
  patient: PATIENT._id,
  appointment: APPOINTMENT._id,
  scheduledAt: subHours(now, 24)
}
