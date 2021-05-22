const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subcategories', {
    RowId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "RowId"
    },
    SubCategoryId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    SubCategoryName: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    CategoryId: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'category',
        key: 'CategoryId'
      }
    }
  }, {
    sequelize,
    tableName: 'subcategories',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "SubCategoryId" },
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
        name: "CategoryId",
        using: "BTREE",
        fields: [
          { name: "CategoryId" },
        ]
      },
    ]
  });
};
