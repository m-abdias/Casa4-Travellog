const queryApi = require('./config/server')
const testRoute = require('./routes/test.route')
const userRoute = require('./routes/user_points.route')
const ErrorHandler = require('./middlewares/error.handler.middleware')
require('../db/config')

queryApi.use(testRoute)
queryApi.use(userRoute)
queryApi.use(ErrorHandler)