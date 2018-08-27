const VueLoaderPlugin = require('vue-loader/lib/plugin');
const resolve = require('path').resolve;

module.exports = {
  devServer: {
  },
  output: {
    filename: './dist/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        loader: 'ts-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [new VueLoaderPlugin()],
};
