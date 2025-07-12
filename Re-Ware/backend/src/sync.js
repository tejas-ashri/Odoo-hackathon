const { syncDatabase } = require('./lib/db');

syncDatabase().then(() => {
  console.log('Database sync complete.');
  process.exit(0);
}).catch((err) => {
  console.error('Database sync failed:', err);
  process.exit(1);
}); 