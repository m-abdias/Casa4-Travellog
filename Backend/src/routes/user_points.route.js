const router = require('express')
const queryInformation = require('../queries/user_query')

const userRoute = router()

userRoute.get('/query_api/v1/user_info', async(req, res, next) => {
  const info = await queryInformation.getUserInfo()
  res.status(200).send(info)
})

module.exports = userRoute