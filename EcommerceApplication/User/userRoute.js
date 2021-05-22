const express = require('express');
const cors = require('cors');
const session  =require('express-session');
const UserRegistarion  = require('../ApplicationDAL/UserDal');

let instance = express();

instance.use(express.urlencoded({extended:false}));
instance.use(express.json());
instance.use(cors());

instance.use(session({
    secret: 'xyzXY123321YXzyx',
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:3600000 
    } 
}));


let User= new UserRegistarion();

instance.post('/api/app/register', User.registerUser);
instance.post('/api/app/auth', User.authUser);
// instance.get('/api/app/get', User.getdata);
instance.post('/api/app/logout',User.logout);

instance.listen(9010,()=>{
    console.log('Service Started at port 9010');
});
