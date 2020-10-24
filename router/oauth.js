const passport = require("passport");
// const devUrl = "http://localhost:3000";
const prodUrl = "https://protected-cove-33966.herokuapp.com";
module.exports = (app) => {
  app.get(
    "/auth/google/",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );
  app.get("/callback/auth", passport.authenticate("google"), (req, res) => {
    console.log("auth works!!");
    res.redirect(`${prodUrl}/surveys`);
  });
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user", (req, res) => {
    console.log(" bhai user haoooo   user exist");
    res.send(req.user);
  });
};
// aalto university
// oulu , tampre
