const debitApi = require('./config/server')
const testRoute = require('./routes/test.route')
const debitRoute = require('./routes/debit.route')
const ErrorHandler = require('./middlewares/error.handler.middleware')

debitApi.use(testRoute)
debitApi.use(debitRoute)
debitApi.use(ErrorHandler)