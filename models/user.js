const mongoose = require('mongoose');
const Schema=mongoose.Schema
 const users=new Schema(
{
googleId: String,
credits: {
    type: Number, default:0
},
name:String
}
 )

 mongoose.model('login',users);