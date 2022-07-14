const router = require('express')
const queryInformation = require('../queries/user_query')

const userRoute = router()

userRoute.get('/query_api/v1/user_info', async (req, res, next) => {
  const info = await queryInformation.getUserInfo()
  res.status(200).send(info)
})

userRoute.get('/query_api/v1/user_points/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const points = await queryInformation.getUserPoints(id)
    res.status(200).send(points)
  } catch (error) {
    next(error)
  }
})

userRoute.post('/query_api/v1/register', async(req, res, next) => {
  const data = req.body
  const newUser = await queryInformation.createUser(data)
  res.sendStatus(201)
  console.log(newUser)
})

module.exports = userRoute