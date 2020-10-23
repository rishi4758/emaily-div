const mongoose = require("mongoose");
const passport = require("passport");
const reqlogin = require("../middlewares/reqlogin");
const reqcredits = require("../middlewares/reqcredits");
const Survey = mongoose.model("surveys");
const Mailer = require("../service/Mailer");
const surveyTemplate = require("../service/emailTemplate/serverTemplate");
module.exports = (app) => {
  app.post("/api/rishav", (req, res) => {
    console.log(req.user);
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients
        .split(",")
        .map((email) => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });
    // great place to send email
    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
      mailer.send();
      survey.save();
      req.user.credits -= 1;
      const user = req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422);
    }
  });

  app.get("/api/surveys", async (req, res) => {
    const survey = await Survey.find({ _user: req.user._id }).select({
      recipients: false,
    });
    console.log(survey);
    res.json(survey);
  });
};
