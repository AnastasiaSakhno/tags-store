const webpack = require("webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const autoprefixer = require("autoprefixer")

const extractSass = new ExtractTextPlugin({
  filename: "/public/css/[name].css"
})




const browserConfig = {
  entry: "./src/browser/index.js",
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "file-loader",
        options: {
          name: "public/media/[name].[ext]",
          publicPath: url => url.replace(/public/, "")
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: { importLoaders: 1 }
            },
            {
              loader: "postcss-loader",
              options: { plugins: [autoprefixer()] }
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        loader: extractSass.extract({
          use: [{
              loader: "css-loader"
          }, {
              loader: "sass-loader",
              options: {
                name: "public/css/[name].[ext]",
                publicPath: url => url.replace(/public/, ""),
                emit: false
              }
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        exclude: /node_modules/
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        exclude: /node_modules/
      },
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: { presets: ["react-app"] }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "public/css/[name].css"
    })
  ]
}

const serverConfig = {
  entry: "./src/server/index.js",
  target: "node",
  output: {
    path: __dirname,
    filename: "server.js",
    libraryTarget: "commonjs2"
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "file-loader",
        options: {
          name: "public/media/[name].[ext]",
          publicPath: url => url.replace(/public/, ""),
          emit: false
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader/locals"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "css-loader/locals"
          }, {
            loader: "sass-loader/locals"
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
      {
        test: /js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: { presets: ["react-app"] }
      }
    ]
  }
}



module.exports = [browserConfig, serverConfig]
