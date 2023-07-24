const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("@module-federation/nextjs-mf/lib/webpack");

const baseConfig = {
  output: {
    publicPath: "http://localhost:3000/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

const hostConfig = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      library: { type: "var", name: "host" },
      remotes: {
        remote: "remote",
      },
      shared: {
        react: { singleton: true, requiredVersion: "^17.0.0" },
        "react-dom": { singleton: true, requiredVersion: "^17.0.0" },
      },
    }),
  ],
};

module.exports = merge(baseConfig, hostConfig);
