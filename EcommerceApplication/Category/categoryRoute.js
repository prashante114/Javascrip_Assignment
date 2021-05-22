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


let AppDal = new ApplicationDal('category');

instance.get('/api/category', AppDal.getAllRecord);
instance.get('/api/category/:id', AppDal.getRecordById);
instance.post('/api/category', AppDal.addRecord);
instance.put('/api/category/:id', AppDal.updateRecord);
instance.delete('/api/category/:id', AppDal.deleteRecord);



let CatDal = new ApplicationDal('subcategories');

instance.get('/api/subcategories', CatDal.getAllRecord);
instance.get('/api/subcategories/:id', CatDal.getRecordById);
instance.post('/api/subcategories', CatDal.addRecord);
instance.put('/api/subcategories/:id', CatDal.updateRecord);
instance.delete('/api/subcategories/:id', CatDal.deleteRecord);

//Loading Index
router.get('/',(req,resp)=>{
    resp.sendFile('index.html', {
        root: path.join(__dirname, '.././views')
    });
});




instance.listen(9002,()=>{
    console.log('server started on port 9002');
});
