const mongoose = require('mongoose');
const Schema=mongoose.Schema
 const users=new Schema(
{
googleId: String,
name:String
}
 )

 mongoose.model('login',users);