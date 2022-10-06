const express=require('express')
const router=express.Router()
const products=require('../controller/product')
const profit=require('../controller/profit')

router.get('/product/:id',products.productInfo)
router.get('/profit/:id',products.productProfitLoss)
//router.get('/profit/:id',profit.)
router.get('/pnl/:id',products.profitLossInfo)
router.get('/productProfitLoss/:id',products.singleProductProfit)
module.exports=router