const axios = require('axios'); //for testing lerna out
const express = require("express");
const port=process.env.PORT || 3004;
const app=express();
//
app.get('/',(req,res)=>{
    res.send("I am a payment API server");
})
//
app.listen(port,(err)=>{
    if(err){
        console.log(`Error: ${err.message}`);
    }else{
        console.log(`Listening on port ${port}`);
    }
})
