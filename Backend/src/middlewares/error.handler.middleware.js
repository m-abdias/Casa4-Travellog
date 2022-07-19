const DatabaseError = require('../model/errors/database.error.model')
const ForbiddenError = require('../model/errors/forbidden.error.model')

const ErrorHandler = (error, req, res, next) => {
  if (error instanceof DatabaseError) {
    res.sendStatus(400) // BAD_REQUEST
  } else if (error instanceof ForbiddenError) {
    res.sendStatus(403) //FORBIDDEN_UNAUTHORIZED
  } else {
    res.sendStatus(500) // INTERNAL_SERVER_ERROR
  }
}

module.exports = ErrorHandler