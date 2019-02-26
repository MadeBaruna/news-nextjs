const withTypescript = require("@zeit/next-typescript");
module.exports = withTypescript({
  target: "serverless",
  publicRuntimeConfig: {
    apiKey: "0de22080bec64af480ffb07903de4441"
  }
});
