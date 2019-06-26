<template>
  <div id="app">
    <div id="comment">
      <shopping-list></shopping-list>
      <goods-list></goods-list>
      <Account></Account>
    </div>
  </div>
</template>
<script>
// 全局引入iconfront
import './assets/iconfont/iconfont.css'
import shoppingList from './components/comment/shoppinglist.vue'
import goodsList from './components/comment/goodslist.vue'
import Account from './components/comment/account.vue'
export default {
  name: 'App',
  components: {
    'shopping-list': shoppingList,
    'goods-list': goodsList,
    'Account': Account
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import "./assets/styles/reset.scss";
#app {
  width: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 70px;
  #comment {
    width: 500px;
    margin: 0 auto;
    padding-top: 32px;
  }
}
</style>
