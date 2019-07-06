//index.js
//获取应用实例

const app = getApp()

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
  toggleTodoHandle: function (e) {
    // 获取当前点击元素的index值
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
  removeTodoHandle:function(e){
    // 获取当前点击元素的index值
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
      allCompleted:this.data.allCompleted
    })
    this.save()
  },
  clearCompletedHandle: function (e) {
    var lists = this.data.lists
    var remains = []
    for (var i = 0; i < lists.length; i++) {
      if(lists[i].completed===false){
        remains.push(lists[i])
      }
    }
    var logs = this.data.logs
    logs.push({
      timestamp: new Date().toLocaleString(),
      action: '清空',
      name: '已完成任务'
    })
    this.setData({ lists: remains, logs: logs })
    this.save()
  },
})
