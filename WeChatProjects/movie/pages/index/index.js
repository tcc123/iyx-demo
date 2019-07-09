//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
      // tab切换  
      currentTab: 0,
      list1:[],
      load:false
  },
  
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    var reqTask = wx.request({ //todo 定义变量的原因？
      url: 'http://10.10.2.80:7300/mock/5ce3666acb7870211c4d7b35/example/',
      method: 'GET',
      success: (res)=>{
        // console.log(res)
        let{list1}=res.data.data
        this.setData({
          list1:list1
        })
      }
    });
    var that = this 
    wx.getSystemInfo({ //todo 为什么写这些代码？
      success: function (res) { 
        that.setData({ 
            clientHeight: res.windowHeight 
        }); 
      } 
    }) 
  },
  loadmore:function(){
    console.log(111111)
    let{list1,load}=this.data
    if(load){
      return
    }
    wx.showLoading({
      title: "拼命加载..."
    });
    wx.request({
      url: 'http://10.10.2.80:7300/mock/5ce3666acb7870211c4d7b35/example',
      method: 'GET',
      success: (res)=>{
        // console.log(res)
        let list2 =res.data.data.list1
        // debugger
        this.setData({
          list1:[...list1,...list2]
        });
        wx.hideLoading();
      }
    });
  },
  swichNav: function (e) {
    // console.log(e);
    this.setData({
      currentTab: e.target.dataset.current //todo 这里应写为e.currentTarget.dataset.current 否则在手机上不生效
    })
  },
  swiperChange: function (e) {
    // console.log(e);
    this.setData({
      currentTab: e.detail.current,
    })
  }
})