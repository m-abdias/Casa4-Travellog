const express = require('express')
require('../../db/config')

const debitApi = express()

debitApi.use(express.json())
debitApi.use(express.urlencoded({ extended: true }))

debitApi.listen(5000, () => {
  console.log('Servidor ON')
})

module.exports = debitApi