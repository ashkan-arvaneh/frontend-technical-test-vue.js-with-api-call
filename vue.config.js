// vue.config.js
module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/tests/vue.js-api-test/" : "/"
};
