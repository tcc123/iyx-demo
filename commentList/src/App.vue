<template>
  <div id="app">
    <div id="content">
      <app-content></app-content>
    </div>
  </div>
</template>
<script>
// 全局引入iconfront
import './assets/iconfont/iconfont.css'
import Content from './components/comment/content'
export default {
  name: 'App',
  components: {
    'app-content': Content
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
  #content {
    width: 500px;
    margin: 0 auto;
    padding-top: 32px;
  }
}
</style>
