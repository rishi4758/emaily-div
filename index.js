const express = require('express');
const passport=require("passport");
const strategy=require("passport-google-oauth20").Strategy;
const key=require("./config/keys")
const app=express();
console.log(key.googleclientSecret)
passport.use( new strategy(
{clientID: key.googleclientID,
clientSecret:key.googleclientSecret,
callbackURL:'/auth/google/callback'
},(token)=>{
console.log(token)
})
);

app.get('/auth/google/',
passport.authenticate('google',{
    scope:['profile','email']
}))
app.get('/',(req,res)=>{
    res.send({ name:"risahv"})
}
)

const port=process.env.PORT || 3000;
app.listen(port)