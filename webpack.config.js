const path = require("path");
const webpack = require("webpack");

module.exports = {
  // 定义环境变量
  // mode: 'development',
  entry: __dirname + "/src/index.ts",
  output: {
    path: path.join(__dirname, "./dest/"),
    filename: "app.js",
    publicPath: "/dest/"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  devServer: {
    host: "127.0.0.1",
    port: 1311,
    open: true,
    historyApiFallback: true,
    inline: true, //注意：不写hot: true，否则浏览器无法自动更新；也不要写colors:true，progress:true等，webpack2.x已不支持这些
    proxy: {
      "/api": {
        target: "http://127.0.0.1:7003", // 转发到的服务器的域名/IP
        pathRewrite: {
          "^/api": "" // 重写path
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: "/node_modules/"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
