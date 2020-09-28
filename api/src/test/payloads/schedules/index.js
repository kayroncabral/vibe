import { addHours, subHours } from 'date-fns'

import { DOCTOR } from 'src/test/payloads/doctors'
import { PATIENT } from 'src/test/payloads/patients'

export const AVAILABLE_SCHEDULE = {
  _id: '5f70f2a7dcaf370afa8053f6',
  status: 'AVAILABLE',
  doctor: DOCTOR._id,
  date: new Date('2020-09-27T15:00:00.000Z')
}

export const SCHEDULED_SCHEDULE = {
  _id: '5f70f2a7dcaf370afa8053f8',
  status: 'SCHEDULED',
  doctor: DOCTOR._id,
  date: addHours(new Date(), 25),
  patient: PATIENT._id,
  scheduledAt: subHours(new Date(), 24)
}

export const CANCELED_SCHEDULE = {
  _id: '5f70f2a7dcaf370afa8053fb',
  status: 'CANCELED',
  doctor: DOCTOR._id,
  date: new Date('2020-09-28T23:00:00.000Z'),
  patient: PATIENT._id,
  scheduledAt: new Date('2020-09-27T20:16:24.517Z'),
  canceledAt: new Date('2020-09-27T20:22:18.286Z')
}
