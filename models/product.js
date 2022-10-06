

//product buy table 
productTable = [
    {

        productId: 1,
        Price: 100,
        quantity: 1000,
        date: null

    },
    {

        productId: 1,
        Price: 10,
        quantity: 1000,
        date: null

    },

    {

        productId: 3,
        Price: 100,
        quantity: 1000,
        date: null

    },
    {

        productId: 3,
        Price: 10800,
        quantity: 1000,
        date: null

    },
    {

        productId: 3,
        Price: 100,
        quantity: 10,
        date: null

    },
    {

        productId: 6,
        Price: 100,
        quantity: 1000,
        date: null

    },
    {

        productId: 8,
        Price: 1,
        quantity: 1000,
        date: null

    },
    {

        productId: 8,
        Price: 170,
        quantity: 1000,
        date: null

    },
    {

        productId: 9,
        Price: 100,
        quantity: 1000,
        date: null

    }



]

sellOutTable = [
    {
        productId: 1,
        Price: 100,
        quantity: 1000,
        date: null

    }, {
        productId: 2,
        Price: 100,
        quantity: 1000,
        date: null

    }, {
        productId: 3,
        Price: 100,
        quantity: 1000,
        date: null

    }, {
        productId: 4,
        Price: 100,
        quantity: 1000,
        date: null

    }, {
        productId: 8,
        Price: 100,
        quantity: 1000,
        date: null

    }, {
        productId: 5,
        Price: 100,
        quantity: 1000,
        date: null

    }, {
        productId: 6,
        Price: 100,
        quantity: 1000,
        date: null

    }, {
        productId: 7,
        Price: 100,
        quantity: 1000,
        date: null

    },

]

function getProductsbyID(productId) {
    let productArray = []
    productTable.forEach(element => {
        if (element.productId == productId) {
            let obj = {
                Price: element.Price,
                quantity: element.quantity
            }
            productArray.push(obj)
        }
        // console.log(element)
    });
    return productArray
}
function getSellProductsbyID(productId) {
    let productArray = []
    sellOutTable.forEach(element => {
        if (element.productId == productId) {
            let obj = {
                Price: element.Price,
                quantity: element.quantity
            }
            productArray.push(obj)
        }
        // console.log(element)
    });
    return productArray

}

function productsById(productId) {

    return getProductsbyID(productId)
}


function calProfitLoss(productId) {

    let buyStatement = getProductsbyID(productId)
    let sellStatement = getSellProductsbyID(productId)
    let productInfo = []
    // console.log(buyStatement)
    let buyQuantity = null, buyPrice = null
    buyStatement.forEach(element => {
        buyPrice += element.Price
        buyQuantity += element.quantity
    });
    let buyItem = buyQuantity / buyPrice


    let sellQuantity = null, sellPrice = null
    sellStatement.forEach(element => {
        sellPrice += element.Price
        sellQuantity += element.quantity
    });
    let sellItem = sellQuantity / sellPrice
    let totalProfit=null,totalLoss=null
    console.log(sellItem, buyItem)
    return productInfo


}

module.exports = { productsById, calProfitLoss }

