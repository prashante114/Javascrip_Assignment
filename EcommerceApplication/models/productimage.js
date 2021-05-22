const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productimage', {
    RowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fieldname: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    originalname: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    mimetype: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    path: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    ProductId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'product',
        key: 'ProductId'
      }
    }
  }, {
    sequelize,
    tableName: 'productimage',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RowId" },
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
