//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
  },
  getUserInfo: function(e) {
    console.log(this)
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
      wx.login({
        success: res => {
          // 获取到用户的 code 之后：res.code
          console.log("用户的code:" + res.code);
          // 可以传给后台，再经过解析获取用户的 openid
          // 或者可以直接使用微信的提供的接口直接获取 openid ，方法如下：
          wx.request({
              url: 'http://10.10.2.80:7300/mock/5ce3666acb7870211c4d7b35/example/mock',
              method: "GET",
              data: {
                code: res.code
              },
              success: res => {
                  // 获取到用户的 openid
                  console.log("用户的openid:" + res.data.data.openid);
                  wx.setStorageSync('user',res.data.data.openid)
              }
          });
        }
      });
    }else {
      console.log("点击了拒绝授权");
    }
  },
  bindViewTap:function(event) {
    wx.navigateTo({
      url: "../logs/logs"
    })
  }
})
