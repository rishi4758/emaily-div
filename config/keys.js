if (process.env.NODE_ENV == "production") {
  module.exports = require("./dev.js");
} else {
  module.exports = require("./dev.js");
}
