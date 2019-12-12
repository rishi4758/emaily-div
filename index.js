const express = require('express');
const app=express();
app.get('/',(req,res)=>{

res.send({ name:'rishav'})

})
app.listen(3000)