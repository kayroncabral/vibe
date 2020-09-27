import mongoose from 'mongoose'

import User from 'src/models/user'

import { Roles } from 'src/utils/enums'

const DoctorSchema = new mongoose.Schema({
  crm: {
    type: String,
    unique: true,
    required: true,
    trim: true
  }
})

export default User.discriminator(Roles.DOCTOR, DoctorSchema)
