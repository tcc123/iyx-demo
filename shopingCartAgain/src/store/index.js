// 引入模块
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// 把vuex作为vue的插件
Vue.use(Vuex)

// 定义store
export default new Vuex.Store({
  state: {
    shoppingList: [],
    goodsList: [],
    goodsId: [],
    checked: false
  },
  getters: {
    checked: (state) => {
      // for (let i = 0; i < state.goodsList.length; i++) {
      //   state.goodsList[i].checked = !state.checked
      // }
      state.goodsList.map((item, index) => { state.goodsList[index].checked = !state.checked })
    }
  },
  mutations: {
    updateList (state, payload) {
      state.shoppingList = payload
    },
    updateCount (state, item) {
      if (state.goodsId.indexOf(item.id) === -1) {
        state.goodsId.push(item.id)
        state.goodsList.push(item)
        state.checked = false
      } else {
        let index = state.goodsList.findIndex(function (x) {
          return x.id === item.id
        })
        state.goodsList[index].purchaseQuantity++
      }
    }
    // checkAll (state) {
    //   for (let i = 0; i < state.goodsList.length; i++) {
    //     state.goodsList[i].checked = !state.checked
    // }
  },
  actions: {
    listInfo ({commit, state}) {
      axios.get('http://10.10.2.80:7300/mock/5ce3666acb7870211c4d7b35/example/mock').then((response) => {
        commit('updateList', response.data.data.list)
      })
    }
  }

})
