const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db');

const Item = sequelize.define('Item', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  condition: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'available',
  },
  uploaderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Item.associate = (models) => {
  Item.belongsTo(models.User, { foreignKey: 'uploaderId', as: 'uploader' });
  Item.hasMany(models.Swap, { foreignKey: 'itemId', as: 'swaps' });
};

module.exports = Item; 