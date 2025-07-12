const sequelize = require('../lib/db');
const User = require('./user');
const Item = require('./item');
const Swap = require('./swap');

const models = { User, Item, Swap };

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

module.exports = { sequelize, ...models }; 