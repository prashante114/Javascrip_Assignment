const express = require('express');
const cors = require('cors');
const path  = require('path');

// load sequelize object model

const {Sequelize,DataTypes,Model} = require('sequelize');

let instance = express();

let router = express.Router();
instance.use(router);

instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
instance.use(cors());
const ApplicationDal = require('../ApplicationDAL/ApplicationDal');


let AppDal = new ApplicationDal('Orders');

instance.get('/api/Orders', AppDal.getAllRecord);
instance.get('/api/Orders/:id', AppDal.getRecordById);
instance.post('/api/Orders', AppDal.addRecord);
instance.put('/api/Orders/:id', AppDal.updateRecord);
instance.delete('/api/Orders/:id', AppDal.deleteRecord);



let CatDal = new ApplicationDal('OrderItem');

instance.get('/api/OrderItem', CatDal.getAllRecord);
instance.get('/api/OrderItem/:id', CatDal.getRecordById);
instance.post('/api/OrderItem', CatDal.addRecord);
instance.put('/api/OrderItem/:id', CatDal.updateRecord);
instance.delete('/api/OrderItem/:id', CatDal.deleteRecord);

//Loading Index
router.get('/',(req,resp)=>{
    resp.sendFile('index.html', {
        root: path.join(__dirname, '.././views')
    });
});




instance.listen(9010,()=>{
    console.log('server started on port 9010');
});
