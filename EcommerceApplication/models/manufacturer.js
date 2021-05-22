const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('manufacturer', {
    RowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "RowId"
    },
    ManufacturerId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    ManufacturerName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "ManufacturerName"
    }
  }, {
    sequelize,
    tableName: 'manufacturer',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ManufacturerId" },
        ]
      },
      {
        name: "RowId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RowId" },
        ]
      },
      {
        name: "ManufacturerName",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ManufacturerName" },
        ]
      },
    ]
  });
};
