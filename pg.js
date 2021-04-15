import PG from 'pg';

const Pool = PG.Pool;

const pool = new Pool({
  user: 'gqogxscw',
  host: 'rogue.db.elephantsql.com',
  database: 'gqogxscw',
  password: 'z-nYh0-oRD_uYMUPUsFmYnH92hsL9V5t',
  port: 5432
});

export default pool;

