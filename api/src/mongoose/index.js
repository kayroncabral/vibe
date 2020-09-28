import mongoose from 'mongoose'

import logger from 'src/utils/logger'

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
  logger.debug('[Mongoose] connected')
})

mongoose.connection.on('error', (error) => {
  logger.error('[Mongoose] error', error)
})

mongoose.connection.on('disconnected', () => {
  logger.debug('[Mongoose] disconnected')
})
