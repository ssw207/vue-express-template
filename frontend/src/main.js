import Vue from 'vue'
import App from './App.vue'
import router from './router' // vue route 설정시 추가됨

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
