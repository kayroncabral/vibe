import mongoose from 'mongoose'

import { ScheduleStatus } from 'src/utils/enums'

const { ObjectId } = mongoose.Types

const ScheduleSchema = new mongoose.Schema(
  {
    doctor: {
      type: ObjectId,
      ref: 'User',
      required: true
    },
    patient: {
      type: ObjectId,
      ref: 'User'
    },
    appointment: {
      type: ObjectId,
      ref: 'Appointment'
    },
    date: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      enum: Object.values(ScheduleStatus),
      default: ScheduleStatus.AVAILABLE,
      set: (value) => value?.toLowerCase(),
      get: (value) => value?.toUpperCase()
    },
    scheduledAt: Date,
    canceledAt: Date
  },
  {
    timestamps: true
  }
)

ScheduleSchema.index({ doctor: 1, date: -1 }, { unique: true })

export default mongoose.model('Schedule', ScheduleSchema)
