import mongoose from 'mongoose'

const ObjectId = mongoose.Types.ObjectId

ObjectId.prototype.valueOf = function () {
  return this.toString()
}

const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(process.env.MONGODB_HOST, options)

mongoose.connection.once('open', () => {
  console.log('[Mongoose] connected')
})

mongoose.connection.on('error', (error) => {
  console.log('[Mongoose] error', error)
})

mongoose.connection.on('disconnected', () => {
  console.log('[Mongoose] disconnected')
})
