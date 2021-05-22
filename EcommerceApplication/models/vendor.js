const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vendor', {
    RowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "RowId"
    },
    VendorId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    VendorName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "VendorName"
    }
  }, {
    sequelize,
    tableName: 'vendor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "VendorId" },
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
        name: "VendorName",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "VendorName" },
        ]
      },
    ]
  });
};
