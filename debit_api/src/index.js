const debitApi = require('./config/server')
const testRoute = require('./routes/test.route')
const debitRoute = require('./routes/debit.route')

debitApi.use(testRoute)
debitApi.use(debitRoute)