const HtmlWebpackPlugin = require("html-webpack-plugin");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  title: "Custom Template",
  template: "./src/assets/template/index.html",
  filename: "index.html",
  inject: "body",
  //Include only certain chunks and exclude certain chunks
  // chunks: [],
  // excludeChunks: []
});

module.exports = {
  entry: "./src/index.tsx",
  //Resolve
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  //Loader
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[hash][ext]",
        },
      },
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
            },
          },
        ],
      },
      // {
      //   test: /\.svg$/,
      //   type: "asset",
      //   generator: {
      //     filename: "assets/icons/[hash][ext]",
      //   },
      // },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [HtmlWebpackPluginConfig],
};
