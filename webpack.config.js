const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
   entry: ['@babel/polyfill', './src/app.js'],
   output: {
      path: path.resolve(__dirname, 'docs/scripts'),
      filename: 'bundle.js'
   },
   plugins: [new MiniCssExtractPlugin()],
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env', '@babel/preset-react']
               }
            }
         },
         {
            test: /\.s?css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
         }
      ]
   },
   devServer: {
      contentBase: path.resolve(__dirname, 'docs'),
      historyApiFallback: true,
      publicPath: '/scripts/'
   },
   devtool: 'source-map'
}
