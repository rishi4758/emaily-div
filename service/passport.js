const passport=require("passport");
const mongoose=require("mongoose");
const strategy=require("passport-google-oauth20").Strategy;
const key=require('../config/keys.js')
const login=mongoose.model('login');
passport.serializeUser((login,done)=>{
    done(null,login.id);
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
 async (Token,refreshToken,profile,done)=>{
     const userExist=await login.findOne({googleId:profile.id})
     
    if(userExist){
        
        return done(null,userExist);
    }
     const use=  await new login({ googleId:profile.id, name:profile.displayName }).save()
            done(null,use);
        
}
)
);