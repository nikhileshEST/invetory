const express = require("express");
const router = express.Router();
const shop = require("../models/shop");
const products = require("../models/product");
const stockData = [
  {
    pID: 1,
    tID: 1,
    price: 90,
    quantity: 100,
  },
  {
    pID: 1,
    tID: 2,
    price: 100,
    quantity: 150,
  },
  {
    pID: 2,
    tID: 3,
    price: 100,
    quantity: 100,
  },
  {
    pID: 1,
    tID: 4,
    price: 80,
    quantity: 100,
  },
];

const sellData = [
  /*
            {
                "pID": 1,
                "tID": 1,
                "price": 150,
                "quantity": 50,
                
            },
            {
                "pID": 1,
                "tID": 1,
                "price": 150,
                "quantity": 50,
                
            },
            {
                "pID": 1,
                "tID": 2,
                "price": 110,
                "quantity": 70,
                
            },
            {
                "pID": 1,
                "tID": 2,
                "price": 150,
                "quantity": 80,
                
            },
        
            {
                "pID": 1,
                "tID": 3,
                "price": 150,
                "quantity": 100,
                
            }
        */
];


module.exports = {
  productInfo: (req, res) => {
    let productId = req.params.id;
    let shopId = req.body.shopId;
    //for shopid check
    let shopProducts = shop.shopProductTable.find((value, index) => {
      if (value.shopId == shopId) {
        return value;
      }
    });
    if (shopProducts == undefined) {
      return res.send("shop not found");
    }
    // console.log(shopProducts)
    // console.log(shopProducts.productIds)
    let product = shopProducts.productIds.find((value) => {
      if (value == productId) {
        return value;
      }
    });
    if (product == undefined) {
      return res.send("product is not available in shop");
    }
    //majorChecks(req,res)
    let resultProduct = products.productsById(productId);
    res.send(resultProduct);
  },
  productProfitLoss: (req, res) => {
    let productId = req.params.id;
    let statement = products.calProfitLoss(productId);
    res.send(statement);
  },
  profitLossInfo: (req, res) => {
    let sellPrice = req.body.price,
      sellQuantity = req.body.quantity,
      productID = req.params.id;
    let pA = [];
    
    stockData.forEach(function (element, index) {
      if (element.pID == productID) {
        //element["index"] = index
        pA.push(element);
      }
    });

    for (let i = 0; i < pA.length; i++) {
      let obj = {
        pID: pA[i].pID,
        tID: pA[i].tID,
        price: sellPrice,
        quantity: null,
      };
      function sellObj(higherQty, lowerQty) {
        if (lowerQty <= 0) return higherQty;
        higherQty = higherQty - lowerQty;
        obj.quantity = lowerQty;
        sellData.push(obj);
        return higherQty;
      }
      if (sellQuantity - pA[i].quantity >= 0) {
        sellQuantity = sellObj(sellQuantity, pA[i].quantity);
        pA[i].quantity = 0;
      } else {
        pA[i].quantity = sellObj(pA[i].quantity, sellQuantity);
        break;
      }
    }
    res.send(stockData);
  },
  singleProductProfit: (req, res) => {
    let productID = req.params.id;

    sellData.forEach((value) => {
      if (value.pID == productID) {
        const found = stockData.find((element) => element.tID == value.tID);
        // console.log(found,value.price,found.price)
        if (value.price < found.price) {
          (value["loss"] = found.price - value.price),
            (value["totalLoss"] = value.loss * value.quantity);
        } else {
          (value["profit"] = value.price - found.price),
            (value["totalProfit"] = value.profit * value.quantity);
        }
      }
    });
    res.send(sellData);
  },
};
