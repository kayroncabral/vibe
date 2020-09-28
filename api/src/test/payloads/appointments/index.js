import { DOCTOR } from 'src/test/payloads/doctors'
import { PATIENT } from 'src/test/payloads/patients'
import { SCHEDULE } from 'src/test/payloads/schedules'

export const APPOINTMENT = {
  _id: '5f716c0955faa10eace0d91b',
  doctor: DOCTOR._id,
  patient: PATIENT._id,
  schedule: SCHEDULE._id,
  icd: 'A37.0',
  description: 'Coqueluche por Bordetella pertussis'
}

export const APPOINTMENT_1 = {
  _id: '5f70f2a7dcaf370afa8053f8',
  doctor: DOCTOR._id,
  patient: PATIENT._id,
  schedule: SCHEDULE._id,
  icd: 'E66.0',
  description: 'Obesidade devida a excesso de calorias'
}

export const APPOINTMENT_2 = {
  _id: '5f70f2a7dcaf370afa8053fb',
  doctor: DOCTOR._id,
  patient: PATIENT._id,
  schedule: SCHEDULE._id,
  icd: 'S70',
  description: 'Traumatismo superficial do quadril e da coxa'
}

export const APPOINTMENT_INPUT = {
  schedule: SCHEDULE._id,
  icd: 'E20',
  description: 'Hipoparatireoidismo'
}
