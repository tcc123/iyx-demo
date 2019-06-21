'use strict'
const fs = require('fs')
const path = require('path')
const express = require('express')
const proxyMiddleware = require('http-proxy-middleware')
const config = require('./config')

// default port where dev server listens for incoming traffic
const app = express()

const isProd = ['development', 'testing','mock', 'production'].indexOf(process.env.NODE_ENV) >= 0;
var proxyTable;
if (process.env.NODE_ENV === 'production') {
    proxyTable = config.build.proxyTable;
} else {
    proxyTable = config.dev.proxyTable;
}
const resolve = file => path.resolve(__dirname, file)
const serve = (path, cache) => express.static(resolve(path), {
    maxAge: cache && isProd ? 60 * 60 * 24 * 30 : 0
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
    let options = proxyTable[context]
    if (typeof options === 'string') {
        options = { target: options }
    }
    app.use(proxyMiddleware(options.filter || context, options))
})

app.use('/node_modules', serve('./node_modules'))
app.use('/static', serve('./dist/static'))
app.use('/assets', serve('./assets'))
var html = fs.readFileSync(resolve('dist/index.html')).toString()
app.get('*', function (req, res) {
    res.setHeader('content-type', 'text/html')
    return res.send(html)
})

var app_port = process.env.NODE_PORT
app.listen(app_port)
