module.exports = {
  entry: "./server.js",
  output: {
    filename: "compiled.js",
  },
  node: {
    fs: "empty",
    net: "empty",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    fallback: {
      fs: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
