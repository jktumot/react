const { Sequelize, DataTypes } = require("sequelize");
const db = require("../backend/db.js");
const Serializer = require('sequelize-to-json')

const Regions = db.define(
  "r1022",
  {
    p00: {
      type: DataTypes.STRING(11),
      allowNull: false,
      primaryKey: true,
    },
    p01: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    utv: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "0",
    },
    p02: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    sp: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0",
    },
  },
  {
    tableName: "r1022",
    schema: "public",
    timestamps: false,
    indexes: [
      {
        name: "r1022_pkey",
        unique: true,
        fields: [{ name: "p00" }],
      },
    ],
  }
);
Regions.findAll({attributes: ['p01']}).then((regions) => {
  const simpleRegion = Serializer.serializeMany(regions, Regions)
  console.log(simpleRegion);
});
module.export = Regions;
