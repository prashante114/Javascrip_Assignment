const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
    RowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "RowId"
    },
    ProductId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    ProducName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    CategoryId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'category',
        key: 'CategoryId'
      }
    },
    SubCategoryId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'subcategories',
        key: 'SubCategoryId'
      }
    },
    ManufacturerId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'manufacturer',
        key: 'ManufacturerId'
      }
    },
    VendorId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'vendor',
        key: 'VendorId'
      }
    },
    ProductPrice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'product',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ProductId" },
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
        name: "ProductId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ProductId" },
        ]
      },
      {
        name: "CategoryId",
        using: "BTREE",
        fields: [
          { name: "CategoryId" },
        ]
      },
      {
        name: "SubCategoryId",
        using: "BTREE",
        fields: [
          { name: "SubCategoryId" },
        ]
      },
      {
        name: "ManufacturerId",
        using: "BTREE",
        fields: [
          { name: "ManufacturerId" },
        ]
      },
      {
        name: "VendorId",
        using: "BTREE",
        fields: [
          { name: "VendorId" },
        ]
      },
    ]
  });
};
