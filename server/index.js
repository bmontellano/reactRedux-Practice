var express = require('express')
var path = require('path')

var webpack = require('webpack')
var webpackMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var webpackConfig = require('../webpack.config.dev')

let app = express()
const PORT = 3000

const compiler = webpack(webpackConfig)

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}))
app.use(webpackHotMiddleware(compiler))


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(PORT, () => console.log('Running on localhost:3000'))
