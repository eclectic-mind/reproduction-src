const webpack = require("webpack");
const path = require(`path`);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageMinPlugin = require("imagemin-webpack-plugin").default;

module.exports = {
  mode: `development`,
  entry: `./src/scripts/main.js`,
  entry: {
    app: [
      "./src/scripts/main.js",
      "./src/styles/styles.scss",
      "./src/index.pug",
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.scss$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.pug$/,
        use: [{
            loader: "html-loader",
          },
          {
            loader: "pug-html-loader",
          },
        ],
      },

      {
        test: /\.(png|gif|jpe?g)$/,
        use: [{
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img/",
            },
          },
          //"img-loader",
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "fonts/",
          },
        },
      },
    ],
  },
  devtool: `source-map`,
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    watchContentBase: true,
    overlay: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./styles/styles.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.pug",
      filename: "./index.html",
    }),

    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, "src/img"),
        to: path.resolve(__dirname, "public/img"),
      }, ],
    }),

    new ImageMinPlugin({
      test: /\.(png|jpe?g|gif|svg)$/,
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
};