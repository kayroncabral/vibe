import { Doctor } from 'src/models'

import { generateToken } from 'src/utils/authentication'

export const createDoctor = async (parent, { input }, context, info) => {
  const doctor = new Doctor(input)
  await doctor.save()

  return { doctor, token: generateToken({ userId: doctor.id }) }
}
