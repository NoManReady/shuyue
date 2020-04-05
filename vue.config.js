const path = require("path");
const { name } = require("./package");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/shuyue" : "/",
  outputDir: `./dist`,
  assetsDir: "static",
  filenameHashing: true,
  devServer: {
    host: "localhost",
    disableHostCheck: true,
    port: 9001,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", `${resolve("src")}`);
    let oneOfsMap = config.module.rule("scss").oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          resources: [
            resolve("src/style/var.scss/var.scss"),
            resolve("src/style/var.scss/mixins.scss")
          ]
        })
        .end();
    });
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd",
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
};
