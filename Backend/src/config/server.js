const express = require('express')

const queryApi = express()

queryApi.use(express.json())
queryApi.use(express.urlencoded({ extended: true }))

queryApi.listen(4000, () => {
  console.log('Servidor ON')
})

module.exports = queryApi