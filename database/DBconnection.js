import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('alex_hospital', 'admin', 'admin', {
  host: 'localhost',
  dialect: 'postgres',  
  logging: false,       
});


sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log("error" + error);
  });

export default sequelize;
