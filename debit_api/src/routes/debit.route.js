const router = require('express')
const debitPoints = require('../queries/debit_api.queries')

const debitRoute = router()

debitRoute.patch('/debit_api/v1/debit_points/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const debit = req.body
    debit.id = id

    await debitPoints.debitUserPoints(debit)
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

module.exports = debitRoute