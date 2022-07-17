const router = require('express')
const db = require('../../db/config')
const User = require('../models/user.model')

class debitPoints {
  async debitUserPoints(user) {
    const script = `
      UPDATE user_info SET
        points = points - $1
      WHERE id = $2  
    `

    const values = [user.points, user.id]
    await db.query(script, values)
  }
}

module.exports = new debitPoints()