import { Doctor } from 'src/models'

export const doctors = async (parent, { input }, context, info) => {
  return Doctor.find({})
}
