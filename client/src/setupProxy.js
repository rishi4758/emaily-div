const proxy = require("http-proxy-middleware");
// const devUrl = "http://localhost:5004";
export const prodUrl = "https://protected-cove-33966.herokuapp.com/";
module.exports = function (app) {
  app.use(proxy(["/api", "/auth/google"], { target: `${prodUrl}` }));
  app.use(proxy(["/api", "/api/user"], { target: `${prodUrl}` }));
  app.use(proxy(["/api", "/api/logout"], { target: `${prodUrl}` }));
  app.use(proxy(["/api", "/api/stripe"], { target: `${prodUrl}` }));
  app.use(proxy(["/api", "/api/surveys"], { target: `${prodUrl}` }));
  app.use(proxy(["/api", "/api/rishav"], { target: `${prodUrl}` }));
};
