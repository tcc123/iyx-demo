'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"mock"',
  apiRoot: JSON.stringify({
    // openApiPath: 'http://topen.yqj.cn/api',
    // userApiPath: 'http://10.10.2.82:9002/mockapi',
    // usersitePath: 'http://10.10.2.82:9002',
    // bookonlineApiPath: 'http://localhost:3402',
    bookonlineApiPath: 'http://10.10.2.80:3402',
    // bookonlineApiPath: 'https://www.easy-mock.com/mock/5b6ac0fcf594902f063a3c24',
    // uploadpath: 'http://tres.yqj.cn/resup.aspx',
    openApiPath: 'http://topen.yqj.cn/api',
    userApiPath: 'http://10.10.2.82:9002/mockapi',
    usersitePath: 'http://10.10.2.82:9002',
    bookonlinePath: 'http://localhost:3402',
    knowledgemap_server: 'http://10.10.2.80:3802',   //爱出版1.3.1
    // bookonlinePath: 'http://10.10.2.80:3402',
    uploadpath: 'http://tres.yqj.cn/resup.aspx'
  }),
  globalParams: JSON.stringify({
    client_id: 'yqj201808211519536529',
    client_secret: '26e794f2ae1c4c27b89d7ce14f7f4c89',
    pageSizes: [2, 5, 8]
  })
})
