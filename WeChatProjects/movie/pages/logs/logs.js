//logs.js
Page({
  data: {
    movies:[],
    list1:[],
  },
  onLoad: function () {
    var reqTask = wx.request({
      url: 'http://10.10.2.80:7300/mock/5ce3666acb7870211c4d7b35/example/upload',
      method: 'GET',
      success: (res)=>{
        // debugger
        console.log(res)
        let{movies}=res.data.data
        this.setData({
          movies:movies
        })
      }
    });
    var reqTask = wx.request({
      url: 'http://10.10.2.80:7300/mock/5ce3666acb7870211c4d7b35/example/',
      method: 'GET',
      success: (res)=>{
        // debugger
        console.log(res)
        let{list1}=res.data.data
        this.setData({
          list1:list1
        })
      }
    });
  },
  onReachBottom: function () { //触底开始下一页
    var reqTask = wx.request({
      url: 'http://10.10.2.80:7300/mock/5ce3666acb7870211c4d7b35/example/upload',
      method: 'GET',
      success: (res)=>{
        // debugger
        // console.log(res)
        let list1 = this.data.list1;
        let{movies}=res.data.data
        this.setData({
          list1:[...list1,...movies]
        })
      }
    });
  }
})
