import mongoose from 'mongoose'

import User from 'src/models/user'

import { Roles } from 'src/utils/enums'

const DoctorSchema = new mongoose.Schema({
  crm: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  role: {
    type: String,
    enum: [Roles.DOCTOR],
    default: Roles.DOCTOR,
    required: true,
    immutable: true,
    set: (value) => value.toLowerCase(),
    get: (value) => value.toUpperCase()
  }
})

export default User.discriminator('Doctor', DoctorSchema)
