const express = require('express');
const cors = require('cors');
const path  = require('path');
var multer  =   require('multer');  

// load sequelize object model

const {Sequelize,DataTypes,Model, ValidationError} = require('sequelize');

let instance = express();
let router = express.Router();
instance.use(router);

instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
instance.use(cors());

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


const product = require(path.join(__dirname, '../models/product'))(sequelize,Sequelize.DataTypes);
const productimage = require(path.join(__dirname, '../models/productimage'))(sequelize,Sequelize.DataTypes);




const ProductDal = require('../ApplicationDAL/ProductDal');
let AppDal = new ProductDal('product');



instance.get('/api/product', AppDal.getAllRecord);
instance.get('/api/product/:id', AppDal.getRecordById);
//instance.post('/api/product', AppDal.addRecord);
instance.put('/api/product/:id', AppDal.UpdateRecord);
instance.delete('/api/product/:id', AppDal.DeleteRecord);
instance.use('/static', express.static(path.join(__dirname, '../reactecommerce/src/uploads')))



//iplodaing image
var storage =   multer.diskStorage({  
    destination: function (req, file, callback) {  
      callback(null, '../reactecommerce/src/uploads');  
    },  
    filename: function (req, file, callback) {  
      callback(null, file.originalname);  
    }  
}); 
var upload = multer({ storage : storage}).single('myfile');

instance.post('/api/productimage',function(req,res){ 
  upload(req,res,async function(err) { 
    try {
          let tx = await sequelize.transaction(async (t)=>{ 
          const productObject = JSON.parse(req.body['prod'])
          let prod = await product.create(productObject,{transaction:t});
          const imgobj = req.file
          imgobj['ProductId'] = productObject['ProductId']
          let img = await productimage.create(imgobj,{transaction:t});
          return res.status(200).send({
            message:"Record Added"
        });
      });
    }catch(ex){
      return res.status(500).send({message:`${ex.message}`});
    }
    });
  });

//Loading Index
router.get('/',(req,resp)=>{
    resp.sendFile('index.html', {
        root: path.join(__dirname, '.././views')
    });
});




instance.listen(9005,()=>{
    console.log('server started on port 9005');
});
