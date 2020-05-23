// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入进度条控件
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
// 引入 v-charts 图表
import VCharts from 'v-charts'
Vue.use(VCharts)
// 引入组件库 element-ui
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
