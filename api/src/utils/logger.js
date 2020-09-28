import winston from 'winston'

const prettyJson = winston.format.printf((info) => {
  if (typeof info.message === 'object') {
    info.message = JSON.stringify(info.message, null, 4)
  }

  return `${info.level}: ${info.message}`
})

const logger = winston.createLogger({
  level: 'debug',
  silent: process.env.NODE_ENV === 'test',
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.colorize(),
    winston.format.prettyPrint(),
    winston.format.splat(),
    winston.format.simple(),
    prettyJson
  )
})

export default logger
