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


let AppDal = new ApplicationDal('manufacturer');

instance.get('/api/manufacturer', AppDal.getAllRecord);
instance.get('/api/manufacturer/:id', AppDal.getRecordById);
instance.post('/api/manufacturer', AppDal.addRecord);
instance.put('/api/manufacturer/:id', AppDal.updateRecord);
instance.delete('/api/manufacturer/:id', AppDal.deleteRecord);

//Loading Index
router.get('/',(req,resp)=>{
    resp.sendFile('index.html', {
        root: path.join(__dirname, '.././views')
    });
});




instance.listen(9004,()=>{
    console.log('server started on port 9004');
});
