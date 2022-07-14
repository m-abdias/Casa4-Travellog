const queryApi = require('./config/server')
const testRoute = require('./routes/test.route')
const userRoute = require('./routes/user_points.route')
require('../db/config')

queryApi.use(testRoute)
queryApi.use(userRoute)