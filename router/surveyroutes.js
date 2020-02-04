const mongoose=require('mongoose')
const reqlogin=require("../middlewares/reqlogin")
const reqcredits=require("../middlewares/reqcredits")
const Survey=mongoose.model("surveys");
const Mailer =require('../service/Mailer')
const surveyTemplate=require('../service/emailTemplate/serverTemplate')
module.exports=(app)=>{
app.post('/api/surveys',reqlogin,reqcredits, async (req,res)=>{

const {title ,subject , body ,recipients }=req.body;
const survey = new Survey({
title,
subject,
body,
recipients:recipients.split(',').map(email=>( {email:email.trim()})),
_user:req.user.id,
dateSent:Date.now()

})


// great place to send email
const mailer=new Mailer(survey,surveyTemplate(survey));
try{
 await mailer.send();
await survey.save();
req.user.credits -=1;
const user=await req.user.save();
res.send(user)
}
catch(err){
    res.status(422);
}

})



}