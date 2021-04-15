import pool from '../pg.js';

const getAllMessages = async (req, res) => {
   try {
      const result = await pool.query('SELECT * FROM message')
      res.json(result.rows);
   }catch (error) {res.status(500).json(error)}
res.send('All messages')

}

const getSingleMessage = async (req, res) => {
   try {
      const {id} = req.params;
      const result = await pool.query('SELECT * FROM message WHERE id=$1', [id])
      if(!result.rowCount) {res.status(404).json({message:'This message does not exist'})}
      else{
      res.json(result.rows);
      }
   }catch (error) {res.status(500).json(error)}
}

export {getAllMessages, getSingleMessage}