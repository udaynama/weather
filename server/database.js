const { Sequelize } = require("sequelize");


const sequelize = new Sequelize("postgres","postgres","fred",{
  host:"localhost",
  dialect:'postgres',
  port:5432,
});

// try {
//   sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

module.exports = sequelize;


