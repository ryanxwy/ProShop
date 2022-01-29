import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

/**
 * protect: a middleware to protect info
 * before user fetch data from the backend
 * backend need to verify the token
 */
const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      /** auth.split(' ') = ['Bearer'+ ' ' + 'token'] */
      token = req.headers.authorization.split(' ')[1]

      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      /**
       * using '-' in select part,
       * will delete that specific field in the final object
       * return the object of user
       */
      req.user = await User.findById(decoded.id).select('-password')

      //   console.log(req.user)

      next()
    } catch (error) {
      res.status(401)
      throw new Error('Not authorized, token failed')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401)
    throw new Error('Not authorized as an admin')
  }
}

export { protect, admin }
