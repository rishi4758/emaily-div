const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const key = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
const app = express();
const session = require("express-session");
const cors = require("cors");

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [key.cookie_key],
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(bodyparser.json());
require("./models/user");
require("./service/passport.js");
require("./models/survey.js");

require("./router/billingroutes.js")(app);
require("./router/oauth.js")(app);
require("./router/surveyroutes.js")(app);
if (process.env.NODE_ENV === "production") {
  // express serveve up production assets
  // like main.js or main.css
  app.use(express.static("client/build"));

  // express will serve index.html
  // if it does not find the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
mongoose
  .connect(key.mongoURI, { useNewUrlParser: true })
  .then(console.log("connected database"));

const port = process.env.PORT || 5004;
app.listen(port);
// "webhook":"lt  -p 5000 -s rishavrapta" "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client ",
