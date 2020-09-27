import mongoose from 'mongoose'

mongoose.Promise = global.Promise

const ObjectId = mongoose.Types.ObjectId

ObjectId.prototype.valueOf = function () {
  return this.toString()
}

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(process.env.MONGODB_HOST, options)

mongoose.connection.on('connected', () => {
  console.log('[Mongoose] connected')
})

mongoose.connection.on('error', (error) => {
  console.log('[Mongoose] error', error)
})

mongoose.connection.on('disconnected', () => {
  console.log('[Mongoose] disconnected')
})
