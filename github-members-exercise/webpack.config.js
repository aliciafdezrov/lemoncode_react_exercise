const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const basePath = __dirname;

module.exports = {
  mode: "development",
  context: path.join(basePath, "src"),
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      api: path.resolve(__dirname, "./src/api/"),
      components: path.resolve(__dirname, "./src/components/"),
      core: path.resolve(__dirname, "./src/core/"),
      layouts: path.resolve(__dirname, "./src/layouts/"),
      model: path.resolve(__dirname, "./src/model/"),
      scenes: path.resolve(__dirname, "./src/scenes/"),
    },
  },
  entry: ["./main.tsx"],
  output: {
    path: path.join(basePath, "dist"),
    filename: "[name].js"
  },
  devtool: "inline-source-map",
  devServer: {
    inline: true,
    host: "localhost",
    port: 8080,
    stats: "minimal"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
        options: {
          useBabel: true,
          babelCore: "@babel/core" // needed for Babel v7
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: /node_modules/,
        loader: "file-loader",
        options: {
          name: "assets/img/[name].[ext]?[hash]"
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader', // creates style nodes from JS strings
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
              modules: {
                localIdentName: '[name]_[local]_[hash:base64:5]'
              },
              localsConvention: 'camelCase', //permite usar los estilos con camel case en vez de usando el nombre original de la regla de css
            }
          },
          {
            loader: "sass-loader", //translates SCSS into CSS
            options: {
              implementation: require("sass") //By default the sass-loader prefers node-sass. In order to avoid this situation you can use the implementation option
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html"
    })
  ]
};
