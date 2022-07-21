const db = require('../../db/config')
const UserInfo = require('../model/user_info.model')
const DatabaseError = require('../model/errors/database.error.model')

class queryInformation {
  async getUserInfo() {
    const script = `
      SELECT * FROM user_info
    `;

    const { rows } = await db.query(script)

    return rows || []
  }

  async getUserPoints(user_id) {
    const script = `
      SELECT id, name, points FROM user_info
      WHERE id = $1
    `
    const values = [user_id]

    const { rows } = await db.query(script, values)
    const [ points ] = rows
    return points || []
  }

  async getUserByNameAndPassword(name, password) {
    try {
      const query = `
        SELECT id, name, password
        FROM user_info WHERE
        name = $1,
        password = crypt($2, 'my_salt')
      `

      const values = [name, password]

      const { rows } = await db.query(query, values)
      const [ user ] = rows

      return user || null

    } catch(error) {
      throw new DatabaseError('Query Error by name and password')
    }
  }

  async createUser(user) {
    const script = `
      INSERT INTO user_info 
      (name, email, password, points)
      VALUES ($1, $2, crypt($3, 'my_salt'), $4)
      RETURNING id
    `
  
    const values = [user.name, user.email, user.password, user.points]
    const { rows } = await db.query(script, values)
    const [ newUser ] = rows
  
    return newUser.id
  }
  
  async addUserPoints(user) {
    const script = `
      UPDATE user_info SET
        points = points + $1
      WHERE id = $2  
    `

    const values = [user.points, user.id]
    await db.query(script, values)
  }
}

module.exports =  new queryInformation()
