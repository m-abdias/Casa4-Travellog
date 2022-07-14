const router = require('express')

const testRoute = router()

testRoute.get('/query_api/v1/test', (req, res) => {
  res.send({
    name: 'Query-API',
    version: 1.0
  })
})

module.exports = testRoute