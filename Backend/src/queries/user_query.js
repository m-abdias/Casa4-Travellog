const router = require('express')
const db = require('../../db/config')
const UserInfo = require('../model/user_info.model')

class queryInformation {
  async getUserInfo() {
    const script = `
      SELECT * FROM query_points
    `;

    const { rows } = await db.query(script)

    return rows || []
  }

  async getUserPoints(user_id) {
    const script = `
      SELECT user_id, points FROM query_points
      WHERE user_id = $1
    `
    const values = [user_id]

    const { rows } = await db.query(script, values)
    const [ points ] = rows
    return points || []
  }
}

module.exports =  new queryInformation()