export const Paths = Object.freeze({
  doctors: {
    path: '/doctors',
    label: 'Médicos'
  },
  schedules: {
    path: '/schedules',
    label: 'Agendamentos'
  },
  mySchedules: {
    path: '/my-schedules',
    label: 'Meus Agendamentos'
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
  APPOINTMENT_DONE: { value: 'APPOINTMENT_DONE', label: 'Consulta realizada' },
  MISSED: { value: 'MISSED', label: 'Falta' }
})
