const express = require('express');
const app = express();
router=express.Router();

// error class
const ExpressError=require('../utils/ExpressError')
// wrapper err function
const catchAsync = require('../utils/catchAsync');


var {navactive}=require('../navactive')

navactive=[0,0,0,1,0,0];


router.get('/', catchAsync(async (req, res, next) => {
    console.log(navactive)
   //res.send("Hello from Yelpcamp");
   //yahan pe dbms se aa rha feed
    //const feeds = await feed.find({});
    //console.log(feeds);
    // isloggedin=0;
   //console.log(isloggedin)
//    if(req.session.loginno){
//        isloggedin=req.session.loginno;
//        res.render('therapy/therapyentry',{navactive,navactive:navactive,isloggedin:isloggedin});
//    }
//    else{
//         res.redirect('login');
//    }
    

   isloggedin=1;
   res.render('therapy/therapyentry',{navactive,navactive:navactive,isloggedin:isloggedin});

}))


router.get('/newtherapists', catchAsync(async (req, res, next) => {
    console.log(navactive)
   //res.send("Hello from Yelpcamp");
   //yahan pe dbms se aa rha feed
    //const feeds = await feed.find({});
    //console.log(feeds);
    // isloggedin=0;
   //console.log(isloggedin)
//    if(req.session.loginno){
//        isloggedin=req.session.loginno;
//        res.render('therapy/therapists',{navactive,navactive:navactive,isloggedin:isloggedin});
//    }
//    else{
//         res.redirect('login');
//    }
    
   isloggedin=1;
   res.render('therapy/therapists',{navactive,navactive:navactive,isloggedin:isloggedin});

}))



module.exports=router;