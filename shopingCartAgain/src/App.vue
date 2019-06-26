<template>
  <div id="app">
    <div id="comment">
      <shopping-list></shopping-list>
      <goods-list></goods-list>
    </div>
  </div>
</template>
<script>
// 全局引入iconfront
import './assets/iconfont/iconfont.css'
import shoppingList from './components/comment/shoppinglist.vue'
import goodsList from './components/comment/goodslist.vue'
export default {
  name: 'App',
  components: {
    'shopping-list': shoppingList,
    'goods-list': goodsList
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
@import "./assets/styles/reset.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  margin-top: 60px;
}
</style>
