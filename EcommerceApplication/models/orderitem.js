const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orderitem', {
    RowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "RowId"
    },
    OrderId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'orders',
        key: 'OrderId'
      }
    },
    ProductId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'product',
        key: 'ProductId'
      }
    },
    CustomerId: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Productprice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Totalprice: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'orderitem',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "OrderId" },
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
        name: "OrderId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "OrderId" },
        ]
      },
      {
        name: "ProductId",
        using: "BTREE",
        fields: [
          { name: "ProductId" },
        ]
      },
    ]
  });
};
