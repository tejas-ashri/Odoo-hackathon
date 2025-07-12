const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db');

const Swap = sequelize.define('Swap', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  requesterId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  itemId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pending',
  },
  pointsUsed: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

Swap.associate = (models) => {
  Swap.belongsTo(models.User, { foreignKey: 'requesterId', as: 'requester' });
  Swap.belongsTo(models.Item, { foreignKey: 'itemId', as: 'item' });
};

module.exports = Swap; 