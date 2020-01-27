const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  watch: true,
  entry: {
    frontend: './assets/index.js'
  },
  output: {
    path: path.resolve(__dirname, './theme/build')
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'assets'),
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'assets'),
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [
                require('postcss-import')(),
                require('postcss-preset-env')()
              ]
            }
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          map: {
            inline: false,
            annotation: true,
          }
        }
      }),
      new TerserPlugin({
        terserOptions: {
          compress: {
            warnings: false
          },
          output: {
            comments: false
          }
        }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new BrowserSyncPlugin({
        host: 'localhost',
        port: 4000,
        logLevel: 'silent',
        files: ['./theme/*.php'],
        proxy: 'http://localhost:8080/',
      })
  ]
};
