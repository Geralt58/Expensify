const path = require('path')

module.exports = {
   //mode: 'none',
   entry: ['@babel/polyfill', './src/app.js'],
   output: {
      path: path.resolve(__dirname, 'docs/scripts'),
      filename: 'bundle.js'
   },
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
            use: ['style-loader', 'css-loader', 'sass-loader']
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
