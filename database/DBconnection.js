import pkg from 'pg';
const {Pool} = pkg;
let pool;
try {
   pool =new Pool({
      host: 'localhost',
      database: 'api',
      password: 'password',
      port: 5432,
    })
    console.log("database connected");
    
} catch (error) {

   console.log(error);
   
   
}

export default pool