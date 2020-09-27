import mongoose from 'mongoose'

import User from 'src/models/user'

import { Roles } from 'src/utils/enums'

const PatientSchema = new mongoose.Schema({
  federalTaxNumber: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  role: {
    type: String,
    enum: [Roles.PATIENT],
    default: Roles.PATIENT,
    required: true,
    immutable: true
  }
})

export default User.discriminator('Patient', PatientSchema)
