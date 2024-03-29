import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { dollarFilter, percentFilter } from '@/filters'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(Chartkick.use(Chart))

Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
