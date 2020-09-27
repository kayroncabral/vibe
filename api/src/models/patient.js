import mongoose from 'mongoose'

import User from 'src/models/user'

import { Roles } from 'src/utils/enums'

const PatientSchema = new mongoose.Schema({
  federalTaxNumber: {
    type: String,
    unique: true,
    required: true,
    trim: true
  }
})

export default User.discriminator(Roles.PATIENT, PatientSchema)
