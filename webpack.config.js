const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const Dotenv = require('dotenv-webpack')

module.exports = (env) => ({
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build')
    },
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpe?g|svg|ico)$/i,
        use: ['file-loader?name=[name].[ext]']
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.css', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@layouts': path.resolve(__dirname, 'src/view/Layouts'),
      '@modules': path.resolve(__dirname, 'src/view/Modules'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@constants': path.resolve(__dirname, 'src/constants')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    }),
    new VueLoaderPlugin(),
    new Dotenv({
      path: `./.env.${env.goal}`
    })
  ]
})
