import { addHours, subHours } from 'date-fns'

import { DOCTOR } from 'src/test/payloads/doctors'

export const AVAILABLE_SCHEDULE = {
  _id: '5f70f2a7dcaf370afa8053f6',
  status: 'AVAILABLE',
  doctor: DOCTOR._id,
  date: '2020-09-27T15:00:00.000Z'
}

export const SCHEDULED_SCHEDULE = {
  _id: '5f70f2a7dcaf370afa8053f8',
  status: 'SCHEDULED',
  doctor: DOCTOR._id,
  date: addHours(Date.now(), 25).toISOString(),
  patient: '5f70e21a394f3906ac02be4d',
  scheduledAt: subHours(Date.now(), 24).toISOString()
}

export const CANCELED_SCHEDULE = {
  _id: '5f70f2a7dcaf370afa8053fb',
  status: 'CANCELED',
  doctor: DOCTOR._id,
  date: '2020-09-28T23:00:00.000Z',
  patient: '5f70e21a394f3906ac02be4d',
  scheduledAt: '2020-09-27T20:16:24.517Z',
  canceledAt: '2020-09-27T20:22:18.286Z'
}
