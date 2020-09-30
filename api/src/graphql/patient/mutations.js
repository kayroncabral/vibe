import { Patient } from 'src/models'

import { generateToken } from 'src/utils/authentication'

export const createPatient = async (parent, { input }, context, info) => {
  const patient = new Patient(input)
  await patient.save()

  return { patient, token: generateToken({ userId: patient.id }) }
}
