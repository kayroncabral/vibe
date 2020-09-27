import { Patient } from 'src/models'

export const createPatient = async (parent, { input }, context, info) => {
  const patient = new Patient(input)
  await patient.save()

  return patient
}
