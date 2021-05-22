const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dispatch', {
    DispatchRowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Order_id: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    BillRowId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CustomerId: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    CustomerName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    CustomerPhone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    CustomerEmail: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    CustomerAddress: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'dispatch',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "DispatchRowId" },
        ]
      },
    ]
  });
};
