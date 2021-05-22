const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    RowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "RowId"
    },
    OrderId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    ORDERDATE: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CustomerId: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Grand_total: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'orders',
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
    ]
  });
};
