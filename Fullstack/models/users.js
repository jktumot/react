// Db
const { DataTypes } = require('sequelize')
const db = require('../backend/db.js')

const Users = db.define('users',
  // Описание таблиц
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    order_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    file_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  // Опции
  {
    timestamps: false
  }
)

module.exports = Users