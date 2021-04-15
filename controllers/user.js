const pool = require('../pg.js');


const getAllUsers = async (req, res) => {

   res.send('get All users')
}

const getSingleUser = async (req, res) => {
   res.send('get single user')

}

const getUserMessage = async (req, res) => {
   try {
   const {id} = req.params;
   const response = await pool.query('SELECT*FROM message INNER JOIN users ON message.id_user=users.id WHERE users.id=$1', [id])
   res.json(response.rows)
   } catch(error) {res.status(500).json()}
}

module.exports = {getAllUsers, getSingleUser, getUserMessage}

//SELECT*FROM message INNER JOIN user1 ON message.id-user=user1.id
