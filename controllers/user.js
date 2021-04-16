// const pool = require('../pg.js');
import pool from '../db/pg.js';

const getAllUsers = async (req, res) => {
// res.send('get All users')

   try {
      const results = await pool.query('SELECT * FROM users;')
      console.log(results)
      if(!results.rowCount) return res.json({message: 'No users found'})
      res.json(results.rows)
   } catch (error) {
      res.status(500).json(error)
   }
}

const getSingleUser = async (req, res) => {
// res.send('get single user')

   try {
      const { id } = req.params;
      const result = await pool.query('SELECT * FROM users WHERE id=$1;', [id]);
      if (!result.rowCount) res.status(404).json({ message: 'No user found' });
      res.json(result.rows[0]);
   } catch (error) {
      res.status(500).json(error);
   }
}

const getUserMessage = async (req, res) => {
   try {
   const {id} = req.params;
   const response = await pool.query('SELECT*FROM message INNER JOIN users ON message.id_user=users.id WHERE users.id=$1', [id])
   res.json(response.rows)
   } catch(error) {res.status(500).json()}
}

export {getAllUsers, getSingleUser, getUserMessage}

//SELECT*FROM message INNER JOIN user1 ON message.id-user=user1.id
