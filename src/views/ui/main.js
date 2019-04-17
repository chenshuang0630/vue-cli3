import Vue from 'vue'
import Ui from './ui.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Ui)
}).$mount('#app')
