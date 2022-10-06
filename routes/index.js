const express=require('express')
const router=express.Router()
const product=require('./product')


router.use("/shop",product)

module.exports=router