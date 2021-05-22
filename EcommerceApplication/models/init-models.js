var DataTypes = require("sequelize").DataTypes;
var _category = require("./category");
var _customer = require("./customer");
var _dispatch = require("./dispatch");
var _manufacturer = require("./manufacturer");
var _orderitem = require("./orderitem");
var _orders = require("./orders");
var _product = require("./product");
var _productimage = require("./productimage");
var _rolemaster = require("./rolemaster");
var _subcategories = require("./subcategories");
var _userlogininfo = require("./userlogininfo");
var _usermaster = require("./usermaster");
var _usersinrole = require("./usersinrole");
var _vendor = require("./vendor");

function initModels(sequelize) {
  var category = _category(sequelize, DataTypes);
  var customer = _customer(sequelize, DataTypes);
  var dispatch = _dispatch(sequelize, DataTypes);
  var manufacturer = _manufacturer(sequelize, DataTypes);
  var orderitem = _orderitem(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var productimage = _productimage(sequelize, DataTypes);
  var rolemaster = _rolemaster(sequelize, DataTypes);
  var subcategories = _subcategories(sequelize, DataTypes);
  var userlogininfo = _userlogininfo(sequelize, DataTypes);
  var usermaster = _usermaster(sequelize, DataTypes);
  var usersinrole = _usersinrole(sequelize, DataTypes);
  var vendor = _vendor(sequelize, DataTypes);

  product.belongsTo(category, { as: "Category", foreignKey: "CategoryId"});
  category.hasMany(product, { as: "products", foreignKey: "CategoryId"});
  subcategories.belongsTo(category, { as: "Category", foreignKey: "CategoryId"});
  category.hasMany(subcategories, { as: "subcategories", foreignKey: "CategoryId"});
  product.belongsTo(manufacturer, { as: "Manufacturer", foreignKey: "ManufacturerId"});
  manufacturer.hasMany(product, { as: "products", foreignKey: "ManufacturerId"});
  orderitem.belongsTo(orders, { as: "Order", foreignKey: "OrderId"});
  orders.hasOne(orderitem, { as: "orderitem", foreignKey: "OrderId"});
  orderitem.belongsTo(product, { as: "Product", foreignKey: "ProductId"});
  product.hasMany(orderitem, { as: "orderitems", foreignKey: "ProductId"});
  productimage.belongsTo(product, { as: "Product", foreignKey: "ProductId"});
  product.hasMany(productimage, { as: "productimages", foreignKey: "ProductId"});
  product.belongsTo(subcategories, { as: "SubCategory", foreignKey: "SubCategoryId"});
  subcategories.hasMany(product, { as: "products", foreignKey: "SubCategoryId"});
  userlogininfo.belongsTo(usermaster, { as: "UserName_usermaster", foreignKey: "UserName"});
  usermaster.hasOne(userlogininfo, { as: "userlogininfo", foreignKey: "UserName"});
  usersinrole.belongsTo(usermaster, { as: "UserName_usermaster", foreignKey: "UserName"});
  usermaster.hasMany(usersinrole, { as: "usersinroles", foreignKey: "UserName"});
  product.belongsTo(vendor, { as: "Vendor", foreignKey: "VendorId"});
  vendor.hasMany(product, { as: "products", foreignKey: "VendorId"});

  return {
    category,
    customer,
    dispatch,
    manufacturer,
    orderitem,
    orders,
    product,
    productimage,
    rolemaster,
    subcategories,
    userlogininfo,
    usermaster,
    usersinrole,
    vendor,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
