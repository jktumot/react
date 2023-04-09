module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define(
    "tutorial",
    {
      p00: {
        type: Sequelize.STRING(11),
        allowNull: false,
        primaryKey: true,
      },
      p01: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
      utv: {
        type: Sequelize.STRING(1),
        allowNull: false,
        defaultValue: "0",
      },
      p02: {
        type: Sequelize.STRING(500),
        allowNull: true,
      },
      sp: {
        type: Sequelize.STRING(1),
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
  return Tutorial;
};
