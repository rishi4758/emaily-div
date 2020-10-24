if (process.env.NODE_ENV == "production") {
  module.exports = require("./prod.js");
} else {
  module.exports = require("./dev.js");
}
//   mongoURI:'mongodb+srv://phoneData:11700946@LpU@cluster0.rjbtr.mongodb.net/mobiles?retryWrites=true&w=majority',
