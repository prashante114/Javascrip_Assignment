const {Sequelize,DataTypes,Model, ValidationError} = require('sequelize');
const path  =require('path');

//database Connection
const sequelize = new Sequelize('eshopping', 'root', 'root',{
    host: 'localhost',
    dialect:'mysql',
    pool: {
        min:0, 
        max:5,
        idle:10000 // 10 minuts of the idle time
    },
    define:{
        timestamps:false
    }
});

//model configuration
const productModel = require(path.join(__dirname, '../models/product'))(sequelize,Sequelize.DataTypes);

//Api Method
class ProductDal {
    constructor(model_name) { 
        this.AppModel = require(path.join(__dirname, `../models/${model_name}`))(sequelize,Sequelize.DataTypes);
        this.productimage = require(path.join(__dirname, `../models/productimage`))(sequelize,Sequelize.DataTypes);
        this.category = require(path.join(__dirname, `../models/category`))(sequelize,Sequelize.DataTypes);
        this.subcategories = require(path.join(__dirname, `../models/subcategories`))(sequelize,Sequelize.DataTypes);
        
        
        this.AppModel.hasMany(this.productimage, { as:"productimages", foreignKey:"ProductId"});
        this.AppModel.belongsTo(this.category, { as: "Category", foreignKey: "CategoryId"});
        this.AppModel.belongsTo(this.subcategories,{as: "SubCategory", foreignKey: "SubCategoryId"});
    }
    getAllRecord= async (request,response)=>{
        try {
            await sequelize.sync({force:false});
            let rows =  await this.AppModel.findAll({include:['productimages','Category','SubCategory']});
            if(rows){
                return response.status(200)
                .send({
                    statusMessage: 'Data is Read Successfully',
                    rowCount:rows.length,
                    rows:rows
                });
            }
        } catch (error) {
            return  response.status(500)
            .send({
                statusMessage: 'Error Occured',
                errorDetails: error.message
            });
        }
    }
    getRecordById = async(request,response)=>{
        try {
            await sequelize.sync({force:false});
            let id = parseInt(request.params.id);
            let row =  await this.AppModel.findOne({where:{ProductId:id}});
            if(row){
                return response.status(200).send({
                message:'Record Read Successfully',
                rowCount:row.length,
                rows:row
            });
        }
        } catch (error) {
            return response.status(500).send({
                message:'Error Coccured'
            });
        }
    }
    AddRecord =async(request,response)=>{
        try {
            const productObject = request.body;
            await sequelize.sync({force:false});
            let record =  await this.AppModel.create(productObject)
            if(record){
                return response.status(200).send({
                    message:'Record Added Successfully',
                    rowCount:record.length
                });
            }
        } catch (error) {
            return response.status(500).send({
                message:'Error Occured',
                errorDetails:error.message
            });
        }
    }
    UpdateRecord = async (request,response)=>{
        try {
            let id = parseInt(request.params.id);
            const productObject = request.body;
            await sequelize.sync({force:false});
            let record =  await this.AppModel.update(productObject,{where:{ProductId:id}})
            if(record){
                return response.status(200).send({
                    message:'Record Updated'
                });
            }
            
        } catch (error) {
            return response.status(500).send({
                message:'Error Occured',
                errorDetails:error.message
            });
        }
    }
    DeleteRecord = async(request,response)=>{
        try {
            let id = parseInt(request.params.id);
            await sequelize.sync({force:false});
            let record =  await this.AppModel.destroy({where:{ProductId:id}})
            if(record){
                return response.status(200).send({
                    message:"Record Deleted"
                });
            }
            
        } catch (error) {
            return response.status(500).send({
                message:'Error Occured',
                errorDetails:error.message
            });
        }
    }
}

module.exports = ProductDal;