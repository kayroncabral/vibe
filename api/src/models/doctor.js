import mongoose from 'mongoose'

import User from 'src/models/base/user'

import { Roles } from 'src/utils/enums'

const { ObjectId } = mongoose.Types

const Specialization = new mongoose.Schema(
  {
    name: { type: String, required: true },
    subspecializations: [{ name: String }]
  },
  { _id: false }
)

const DoctorSchema = new mongoose.Schema({
  crm: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  specializations: [{ type: Specialization, required: true }],
  schedules: [{ type: ObjectId, ref: 'Schedule' }]
})

export default User.discriminator(Roles.DOCTOR, DoctorSchema)
