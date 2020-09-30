import jwt from 'jsonwebtoken'

import { User } from 'src/models'

export const authenticate = (request) => {
  const authorization = request.headers?.authorization

  if (authorization) {
    const token = authorization.replace('Bearer ', '')
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    return User.findById(decoded.userId)
  }

  return null
}

export const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET)
}
