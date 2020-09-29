export const Paths = Object.freeze({
  doctors: {
    path: '/doctors',
    label: 'Doctors'
  },
  schedules: {
    path: '/schedules',
    label: 'Schedules'
  }
})

export const Sex = Object.freeze({
  MALE: { value: 'MALE', label: 'Masculino' },
  FEMALE: { value: 'FEMALE', label: 'Feminino' }
})

export const ScheduleStatus = Object.freeze({
  AVAILABLE: { value: 'AVAILABLE', label: 'Disponível' },
  BOOKED: { value: 'BOOKED', label: 'Agendado' },
  CANCELED: { value: 'CANCELED', label: 'Cancelado' },
  APPOINTMENT_DONE: { value: 'APPOINTMENT_DONE', label: 'Consulta realizada' }
})
