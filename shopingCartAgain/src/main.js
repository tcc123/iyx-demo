// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueCookie from 'vue-cookie'
import router from './router'
import * as utils from './utils'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueDND from 'awe-dnd'
import * as custom from './filters/index'
import echarts from 'echarts'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$utils = utils
Vue.prototype.$apiRoot = process.env.apiRoot
Vue.prototype.$globalParams = process.env.globalParams
Vue.prototype.$echarts = echarts
console.log(process.env.apiRoot)

Vue.use(ElementUI)
Vue.use(VueCookie)
Vue.use(VueDND)
Vue.use(require('vue-moment'))
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
Object.keys(custom).forEach(key => {
  console.log(key)
  console.log(custom[key])
  Vue.filter(key, custom[key])
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
