//index.js
//获取应用实例
const app = getApp() //todo 这里为什么要定义这个变量？

Page({
  data: {
    inputValue: '',
    lists: [],
    leftCount: 0,
    allCompleted: false,
    logs:[]
  },
  save: function () {
    wx.setStorageSync('todo_list', this.data.lists)
    wx.setStorageSync('todo_logs', this.data.logs)
  },
  onLoad: function () {
    //todo 定义变量使用es6的关键字
    var todos = wx.getStorageSync('todo_list') // 调用 WX API 从本地缓存中获取数据
    if (todos) {
      var leftCount = todos.filter(function (item) {
        return !item.completed
      }).length
      this.setData({ lists: todos, leftCount: leftCount })
    }
    var logs = wx.getStorageSync('todo_logs')
    if (logs) {
      this.setData({ logs: logs })
    }
    //todo 换成这种写法更好
    // this.setData({
    //   logs: wx.getStorageSync('todo_logs') || []
    // })
  },
  inputChangeHandle: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  addTodoHandle: function () {
    if (this.data.inputValue){
      var lists = this.data.lists
      lists.push({ name: this.data.inputValue, completed: false })
      var logs = this.data.logs
      logs.push({ timestamp: new Date().toLocaleString(), action: '新增', name: this.data.inputValue })
      //todo toLocaleString()不能使用，在手机上显示的时间格式不正确，小程序开发的实际效果以手机为准，模拟器只是参考。
      // console.log(lists)
      this.setData({
        inputValue: '',
        lists: lists,
        leftCount: this.data.leftCount + 1,
        logs: logs
      })
    }
    this.save()
  },
  toggleTodoHandle: function (e) { //todo 变量定义太多，名字重复，能否简化？
    var index = e.currentTarget.dataset.index
    var lists = this.data.lists
    lists[index].completed = !lists[index].completed
    var logs = this.data.logs
    logs.push({
      timestamp: new Date().toLocaleString(),
      action: lists[index].completed ? '标记完成' : '标记未完成',
      name: lists[index].name
    })
    this.setData({
      lists: lists,
      leftCount: this.data.leftCount + (lists[index].completed ? -1 : 1),
      logs: logs
    })
    this.save()
  },
  removeTodoHandle:function(e){ //todo 变量定义太多，名字重复，能否简化？
    var index = e.currentTarget.dataset.index
    var lists = this.data.lists
    var remove = lists.splice(index, 1)[0]
    // console.log(remove)
    var logs = this.data.logs
    logs.push({ 
      timestamp: new Date().toLocaleString(), 
      action: '移除', 
      name: remove.name
    })
    this.setData({
      lists: lists,
      leftCount: this.data.leftCount - (remove.completed ? 0 : 1),
      logs: logs
    })
    this.save()
  },
  toggleAllHandle:function(){
    this.data.allCompleted = !this.data.allCompleted
    var lists = this.data.lists
    for (var i=0 ; i < lists.length ; i++) {
      lists[i].completed = this.data.allCompleted
    }
    var logs = this.data.logs
    logs.push({
      timestamp: new Date().toLocaleString(),
      action: this.data.allCompleted ? '标记完成' : '标记未完成',
      name: '全部任务'
    })
    this.setData({
      lists: lists,
      leftCount: this.data.allCompleted ? 0 : lists.length,
      logs: logs,
      allCompleted:this.data.allCompleted //todo 这里的赋值？
    })
    this.save()
  },
  clearCompletedHandle: function (e) {
    var lists = this.data.lists
    var remains = []
    for (var i = 0; i < lists.length; i++) {
      if(lists[i].completed===false){ //todo 这样的判断可以简写为if(!lists[i].completed) {}
        remains.push(lists[i])
      }
    }
    var logs = this.data.logs //todo 用var定义了变量，名字都一样，存在隐患
    logs.push({
      timestamp: new Date().toLocaleString(),
      action: '清空',
      name: '已完成任务'
    })
    this.setData({ lists: remains, logs: logs })
    this.save()
  },
})

//todo 思考以下问题

// 1、todolist应该有哪些功能？
// 2、为什么删除默认模版代码？
// 3、为什么建议使用es6写小程序？
// 4、代码里面是否需要注释？注释应该加在什么地方？
// 5、出现大量的重复定义变量，怎么办？