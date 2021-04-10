const express = require("express");
const port=process.env.PORT || 3003;
const app=express();

app.get('/',(req,res)=>{
    res.send("I am a customer API server");
})

app.listen(port,(err)=>{
    if(err){
        console.log(`Error: ${err.message}`);
    }else{
        console.log(`change 4 Listening on port ${port}`);
    }
})
