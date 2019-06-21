'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  apiRoot: JSON.stringify({
    openApiPath: 'http://topen.yqj.cn/api',
    userApiPath: 'http://10.10.2.82:9002/mockapi',
    usersitePath: 'http://10.10.2.82:9002',
    bookonlineApiPath: 'http://10.10.2.80:3402',
    uploadpath: 'http://tres.yqj.cn/resup.aspx',
    bookonlinePath: 'http://10.10.2.80:3400'
  }),
  globalParams: JSON.stringify({
    client_id: 'yqj201808211519536529',
    client_secret: '26e794f2ae1c4c27b89d7ce14f7f4c89',
    pageSizes: [4, 6, 8]
	})
})
