const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: false,
  }
);

async function syncDatabase() {
  await sequelize.sync({ alter: true });
  console.log('Database synced!');
}

module.exports = sequelize;
module.exports.syncDatabase = syncDatabase;
