Component({
  observers: {
    'numberA, numberB': function (numberA, numberB) {
      debugger
      this.setData({
        sum: numberA + numberB
      })
    }
  },
  attached: function () {
    this.setData({
      numberA: 1,
      numberB: 2,
    })
  }
})
