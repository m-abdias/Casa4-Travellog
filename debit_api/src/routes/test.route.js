const router = require('express')

const testRoute = router()

testRoute.get('/debit_api/v1/test', (req, res, next) => {
  res.send({
    name: 'Debit API',
    version: 0.1,
    author: 'Marcos M. Ferreira'
  })
})

module.exports = testRoute