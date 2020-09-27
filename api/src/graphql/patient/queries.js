import { Patient } from 'src/models'

export const patients = async (parent, { input }, context, info) => {
  return Patient.find({})
}
