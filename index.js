const express = require('express');
const mongoose = require('mongoose');
const key=require("./config/keys")
const cookieSession=require("cookie-session");
const passport=require("passport");
const app=express();


app.use(
    cookieSession({
        maxAge:30 *24* 60 *60* 1000,
 keys:[key.cookie_key]

    })
)

app.use(passport.initialize());
app.use(passport.session())
require("./router/oauth.js")(app)
mongoose.connect(key.mongoURI, {useNewUrlParser: true}).then(
    console.log("connected database")
);
require("./models/user");
require("./service/passport.js");
const port=process.env.PORT || 5003;
app.listen(port)