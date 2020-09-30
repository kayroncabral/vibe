import { addHours, subHours } from 'date-fns'

import { ScheduleStatus } from 'src/utils/enums'

const now = new Date()

export const SCHEDULE = {
  _id: '5f70f2a7dcaf370afa8053f4',
  status: ScheduleStatus.BOOKED.toUpperCase(),
  doctor: '5f71147a468bd9fa5ce712df',
  date: now.toISOString(),
  patient: '5f70e21a394f3906ac02be4d',
  scheduledAt: subHours(now, 24).toISOString()
}

export const AVAILABLE_SCHEDULE = {
  _id: '5f70f2a7dcaf370afa8053f6',
  status: ScheduleStatus.AVAILABLE.toUpperCase(),
  doctor: '5f71147a468bd9fa5ce712df',
  date: now.toISOString()
}

export const BOOKED_SCHEDULE = {
  _id: '5f70f2a7dcaf370afa8053f8',
  status: ScheduleStatus.BOOKED.toUpperCase(),
  doctor: '5f71147a468bd9fa5ce712df',
  date: addHours(now, 25).toISOString(),
  patient: '5f70e21a394f3906ac02be4d',
  scheduledAt: subHours(now, 24).toISOString()
}

export const CANCELED_SCHEDULE = {
  _id: '5f70f2a7dcaf370afa8053fb',
  status: ScheduleStatus.CANCELED.toUpperCase(),
  doctor: '5f71147a468bd9fa5ce712df',
  date: addHours(now, 26).toISOString(),
  patient: '5f70e21a394f3906ac02be4d',
  scheduledAt: now.toISOString(),
  canceledAt: addHours(now, 1).toISOString()
}

export const APPOINTMENT_DONE_SCHEDULE = {
  _id: '5f73d60515369801ab8a3798',
  status: ScheduleStatus.APPOINTMENT_DONE.toUpperCase(),
  doctor: '5f71147a468bd9fa5ce712df',
  date: addHours(now, 25),
  patient: '5f70e21a394f3906ac02be4d',
  appointment: '5f716c0955faa10eace0d91b',
  scheduledAt: subHours(now, 24)
}
