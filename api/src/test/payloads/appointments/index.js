import { DOCTOR } from 'src/test/payloads/doctors'
import { PATIENT } from 'src/test/payloads/patients'
import { SCHEDULE } from 'src/test/payloads/schedules'

export const APPOINTMENT = {
  _id: '5f716c0955faa10eace0d91b',
  doctor: DOCTOR._id,
  patient: PATIENT._id,
  schedule: SCHEDULE._id,
  icd: 'A37.0',
  description:
    'Coqueluche por Bordetella pertussis.Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis'
}

export const APPOINTMENT_1 = {
  _id: '5f70f2a7dcaf370afa8053f8',
  doctor: DOCTOR._id,
  patient: PATIENT._id,
  schedule: SCHEDULE._id,
  icd: 'E66.0',
  description:
    'Obesidade devida a excesso de calorias.Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc'
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
