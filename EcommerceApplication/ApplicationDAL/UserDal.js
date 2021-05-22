const {Sequelize,DataTypes,Model,ValidationError} = require('sequelize');
const path  =require('path');

const express = require('express');

let instance = express();
let router = express.Router();
instance.use(router);
var CryptoJS = require("crypto-js");

instance.use(express.urlencoded({extended:false}));
instance.use(express.json());

const sequelize = new Sequelize('eshopping', 'root', 'root',{
  host: 'localhost',
  dialect:'mysql',
  pool: {
      min:0, 
      max:5,
      idle:10000 
  },
  define:{
      timestamps:false
  }
});

const users = require(path.join(__dirname, '../models/usermaster'))(sequelize,Sequelize.DataTypes);
const userrole = require(path.join(__dirname, '../models/usersinrole'))(sequelize,Sequelize.DataTypes);

class UserRegistarion {
  async registerUser(req,resp){
        try {
            let tx = await sequelize.transaction(async (t)=>{ 
            const user = req.body;
            // var enc_pass = encrypt(user.Password)
            // user['Password'] = enc_pass
            await sequelize.sync({force:false});
            let usermaster = await users.create(user,{transaction:t});
            let usrrole = await userrole.create(user,{transaction:t});
            return resp.status(200).send({
            message:"User Added"
            });
        });
        }catch(ex){
            return resp.status(500).send({message:`${ex.message}`});
        }
    }
    async authUser(req,resp){
        try{
            let user = req.body;
            await sequelize.sync({force:false});
            const find = await users.findOne({where:{UserName:user.UserName}});
            const find_user_role = await userrole.findOne({where:{UserName:user.UserName}});
            if(find === null){
                    return resp.status(404).send({message: `User ${user.UserName} is Not found so please register`});
            }
            //var dnc_pass = decrypt(find.Password)
            //find['Password'] = dnc_pass 
           if(find.Password.trim() !== user.Password.trim()){ 
                 return resp.status(401).send({message: `The Password for User ${user.UserName} is not found`});
           }
           req.session.loggedin = true; 
           req.session.name = user.UserName;
           return resp.status(200).send({UserName:find_user_role.UserName,Role:find_user_role.RoleName});
        }catch(ex){
            return resp.status(500).send({message:`${ex.message}`});
        }
       
  }
    async getdata(req,resp){
        if(req.session.name  === undefined)
            return resp.status(401).send(
                {
                    message: `Session for User is expired please login`
                });
        await sequelize.sync({force:false});
        const data = await deptModel.findAll();
        return resp.status(200).send({response:data});   
     }
   
    async logout(req,resp){
        req.session.destroy();
        return resp.status(200).send({response: 'User has logged-out sucessfully'});
    }   
  }
function encrypt(password){
    var encrypt_password = CryptoJS.AES.encrypt(password, '123').toString();
    return encrypt_password
}

function decrypt(password){
    var bytes  = CryptoJS.AES.decrypt(password, '123');
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText
}

module.exports = UserRegistarion;