import pool from '../pg.js'

const getRandomUser = async (req,res) => {
   try {
     ;
      const getRandom = ()=> Math.ceil(Math.random()*5)
      const random = getRandom();
      const response = await pool.query('SELECT * FROM users WHERE id=$1', [random])
      res.json(response.rows);
      
   }
   catch(error) {console.log()}
} 

export {getRandomUser}