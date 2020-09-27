import mongoose from 'mongoose'

import { Sex } from 'src/utils/enums'

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    birthday: {
      type: Date,
      required: true
    },
    sex: {
      type: String,
      enum: Object.values(Sex),
      required: true,
      set: (value) => value.toLowerCase(),
      get: (value) => value.toUpperCase()
    }
  },
  {
    timestamps: true,
    discriminatorKey: 'role'
  }
)

export default mongoose.model('User', UserSchema)
