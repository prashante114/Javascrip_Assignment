const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rolemaster', {
    RowId: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    RoleName: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    RoleDescription: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'rolemaster',
    timestamps: false,
    indexes: [
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
