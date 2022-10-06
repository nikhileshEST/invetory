let totalPrice = null, totalQuantity = null
function calculate(value) {
    totalPrice += value.Price,
        totalQuantity += value.quantity

}
buyStatement.forEach(calculate)
let Info = {
    "Price": totalPrice,
    "Quantity": totalQuantity,
    "perItemCost": totalPrice / totalQuantity
}
let buyPer=totalPrice / totalQuantity
totalPrice = null, totalQuantity = null
productInfo.push({ "buyInfo": Info })
sellStatement.forEach(calculate)
let sellPer=totalPrice / totalQuantity
productInfo.push({
    "sellInfo": {
        "Price": totalPrice,
        "Quantity": totalQuantity,
        "perItemCost": totalPrice / totalQuantity
    }
})

if(sellPer>buyPer){
productInfo.push({
    "Profit":sellPer-buyPer
})
}
else{
productInfo.push({
    "loss":sellPer-buyPer
})
}

/*

             sellProduts = sellQuantity
console.log(pA[i].quantity,sellQuantity)
console.log(pA[i].quantity - sellQuantity,"quy" )
            if (pA[i].quantity - sellQuantity >= 0) {
                stockData[pA[i].index].quantity = pA[i].quantity - sellQuantity

                let obj = {
                    "pID": pA[i].pID,
                    "tID": pA[i].tID,
                    "quantity": sellProduts,
                    "price": req.body.price
                }
                sellData.push(obj)
                break
            }
                let obj = {
                    "pID": pA[i].pID,
                    "tID": pA[i].tID,
                    "quantity": pA[i].quantity,
                    "price": req.body.price
                }
                sellData.push(obj)
            
                sellQuantity = sellQuantity - pA[i].quantity
                stockData[pA[i].index].quantity = 0
            // sellProduts = sellQuantity - (sellQuantity - pA[i].quantity)
*/

//next code pura chla hai ye for profit and loss
/*


      let obj = {
        pID: pA[i].pID,
        tID: pA[i].tID,
        price: sellPrice,
        quantity: null,
      }

      if (sellQuantity - pA[i].quantity >= 0) {
        obj.quantity = pA[i].quantity;
        sellQuantity = sellQuantity - pA[i].quantity;
        pA[i].quantity = 0;

        if (obj.quantity > 0) {
          sellData.push(obj);
        }

        // console.log(sellData)
      } else {
        pA[i].quantity = pA[i].quantity - sellQuantity;

        obj.quantity = sellQuantity;
        // console.log(qu)
        if (obj.quantity > 0) {
          sellData.push(obj);
        }
        // sellData.push(obj);
        break;
      }

*/
