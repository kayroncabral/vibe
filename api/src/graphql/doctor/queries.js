import { Doctor } from 'src/models'

export const doctors = async (parent, { input }, context, info) => {
  const doctors = await Doctor.find({})
  return doctors
}
