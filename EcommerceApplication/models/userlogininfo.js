const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userlogininfo', {
    LoginCountID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'usermaster',
        key: 'UserName'
      },
      unique: "userlogininfo_ibfk_1"
    },
    LoginDateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    LogoutDateTime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'userlogininfo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "LoginCountID" },
        ]
      },
      {
        name: "UserName",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "UserName" },
        ]
      },
    ]
  });
};
