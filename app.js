const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const routes=require('../Inventroy/routes/index')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/",routes)
app.listen(7000,()=>{
    console.log('run run')
})