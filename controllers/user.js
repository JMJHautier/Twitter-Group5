const pool = require('../pg.js');


const getAllUsers = async (req, res) => {

   res.send('get All users')
}

const getSingleUser = async (req, res) => {
   res.send('get single user')

}

module.exports = {getAllUsers, getSingleUser}