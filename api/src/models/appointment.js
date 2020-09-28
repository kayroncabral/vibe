import mongoose from 'mongoose'

const { ObjectId } = mongoose.Types

const AppointmentSchema = new mongoose.Schema(
  {
    doctor: {
      type: ObjectId,
      ref: 'User',
      required: true
    },
    patient: {
      type: ObjectId,
      ref: 'User',
      required: true
    },
    schedule: {
      type: ObjectId,
      ref: 'Schedule',
      required: true
    },
    icd: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('Appointment', AppointmentSchema)
