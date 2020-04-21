const HTMLWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  entry: './dev/app.jsx',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./dev/index.html"
    })
  ],
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true
  }
}
