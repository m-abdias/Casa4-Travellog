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
}

module.exports =  new queryInformation()