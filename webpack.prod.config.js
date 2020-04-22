module.exports = {
  entry: "./src/main.jsx",
  output: {
    libraryTarget: "umd",
    library: "vf",
    libraryExport: "default"
  },
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
  }
}
