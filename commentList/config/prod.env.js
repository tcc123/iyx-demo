'use strict'
module.exports = {
  NODE_ENV: '"production"',
   apiRoot: JSON.stringify({
    courseApiPath: "http://course.aipublish.cn/api",
    coursesitePath: "http://course.aipublish.cn",
    userApiPath: "http://user.aipublish.cn/api",
    usersitePath: "http://user.aipublish.cn/",
    shopApiPath: "http://shop.aipublish.cn/api",
    shopsitePath: "http://shop.aipublish.cn/",
    openApiPath: "http://open.aipublish.cn/api",
    opensitePath: "http://open.aipublish.cn",
    uploadpath: "http://res.aipublish.cn/resup.aspx",
    bookonlinePath:'http://www.aipublish.cn',
    bookonlineApiPath:"https://wwwapi.aipublish.cn",
    knowledgemap_server: 'http://kmapapi.aipublish.cn'
  }),
  globalParams: JSON.stringify({
    client_id: 'yqj201808211519536529',
    client_secret: '26e794f2ae1c4c27b89d7ce14f7f4c89',
    pageSizes: [4, 6, 8]
  })
}
