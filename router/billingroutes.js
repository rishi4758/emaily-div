const keys=require('../config/keys.js')
const stripe=require("stripe")(keys.stripeSecretKey)
const reqlogin=require("../middlewares/reqlogin")

module.exports=app=>{
    app.post("/api/stripe",reqlogin,async (req,res)=>{
const charge=await stripe.charges.create({
amount: 500 ,
currency:'usd',
description:'$5 for 5 credits',
source: req.body.id

})

req.user.credits+= 5;
const user=await req.user.save();
res.send(user)
;


    });



}