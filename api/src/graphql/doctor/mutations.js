import { Doctor } from 'src/models'

export const createDoctor = async (parent, { input }, context, info) => {
  const doctor = new Doctor(input)
  await doctor.save()

  return doctor
}
