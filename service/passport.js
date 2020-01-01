const passport=require("passport");
const mongoose=require("mongoose");
const strategy=require("passport-google-oauth20").Strategy;
const key=require('../config/keys.js')
const login=mongoose.model('login');
passport.serializeUser((use,done)=>{
    done(null,use.id);
})

passport.deserializeUser((id,done)=>{
    login.findById(id).then((user)=>{
        done(null,user)
    })
})
    
passport.use(
    new strategy(
{clientID: key.googleclientID,
clientSecret:key.googleclientSecret,
callbackURL:'/auth/google/callback',
proxy:true

},
(Token,refreshToken,profile,done)=>{
login.findOne({googleId:profile.id}).then((userExist)=>{
    if(userExist){
        console.log("user exist");
        done(null,userExist);
    }else{
        new login({
            googleId:profile.id,
            name:profile.displayName
            }).save().then(use=> done(null,use))
    }
})


})
);