const path=require('path')
const express=require('express');
const rootDir=require('../util/path')
const router=express.Router();

router.get('/add-product',(req,res,next)=>{
    // console.log('In another middleware');
    res.sendFile(path.join(rootDir,'views','add-product.html'))
    });
router.get('/contact-us',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactUs.html'))
})
    router.post('/product',(req,res,next)=>{
        console.log(req.body);
        res.redirect('/')
    })
    module.exports=router;