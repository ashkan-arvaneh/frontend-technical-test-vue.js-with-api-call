// vue.config.js
module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/technical-tests/vue.js-api-test/"
      : "/"
};
