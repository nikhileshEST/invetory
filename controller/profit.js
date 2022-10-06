const productData = [
    {
        "pID": 1,
        "tID": 1,
        "price": 100,
        "quantity": 100
    },
    {
        "pID": 1,
        "tID": 2,
        "price": 100,
        "quantity": 100
    },
    {
        "pID": 2,
        "tID": 3,
        "price": 100,
        "quantity": 100
    },
    {
        "pID": 2,
        "tID": 4,
        "price": 100,
        "quantity": 100
    },
]


function profitLossInfo(req, res)  {
    res.send("hello")
    
}
module.export = {
    profitLossInfo
}