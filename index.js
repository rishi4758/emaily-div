const express = require('express');
const app=express();
// cnbckjndkjshk
app.get('/',(req,res)=>{

res.send({ name:'rishav'})

})
const port=process.env.PORT || 3000;
app.listen(port)