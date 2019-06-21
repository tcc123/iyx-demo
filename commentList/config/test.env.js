'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  apiRoot: JSON.stringify({
    openApiPath: 'http://topen.yqj.cn/api',
    userApiPath: 'http://tuser.yqj.cn/api',
    usersitePath: 'http://tuser.yqj.cn',
    bookonlineApiPath: 'http://testwwwapi.yqj.cn',
    uploadpath: 'http://tres.yqj.cn/resup.aspx',
    bookonlinePath: 'http://testwww.yqj.cn',
    knowledgemap_server: 'http://testkmapapi.yqj.cn'
  }),
  globalParams: JSON.stringify({
    client_id: 'yqj201808211519536529',
    client_secret: '26e794f2ae1c4c27b89d7ce14f7f4c89',
    pageSizes: [4, 6, 8]
  })
})
