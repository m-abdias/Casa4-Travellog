const router = require('express')
const debitPoints = require('../queries/debit_api.queries')

const debitRoute = router()

debitRoute.patch('/debit_api/v1/user_points/:id', async (req, res, next) => {
  try {
    const idUser = req.params.id
    const modifiedPoints = req.body
    modifiedPoints.id = idUser
    res.sendStatus(200)

    await debitPoints.changeUserPoints(modifiedPoints)
  } catch (error) {
    next(error)
  }
})

module.exports = debitRoute