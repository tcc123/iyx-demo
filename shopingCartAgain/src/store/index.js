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
        let index = state.goodsList.findIndex(x => {
          return x.id === item.id
        })
        state.goodsList[index].purchaseQuantity++
      }
    },
    checkAll (state, check) {
      state.goodsList.map(item => { item.checked = !check })
    },
    select (state) {
      let result = state.goodsList.every(item => {
        return item.checked === true
      })
      state.checked = result
    },
    minius (state, index) {
      return state.goodsList[index].purchaseQuantity > 1 ? state.goodsList[index].purchaseQuantity-- : 1
    },
    add (state, index) {
      return state.goodsList[index].purchaseQuantity++
    },
    checkDel (state, payload) {
      state.goodsList.splice(payload.index, 1)
      state.goodsId.splice(payload.index, 1)
      payload.item.purchaseQuantity = 1
      payload.item.checked = false
    }
  },
  actions: {
    listInfo ({commit}) {
      axios.get('http://10.10.2.80:7300/mock/5ce3666acb7870211c4d7b35/example/mock').then((res) => {
        commit('updateList', res.data.data.list)
      })
    }
  }
})
