import Vue from 'vue'
import App from './App.vue'
import wangEditor from './wangeditor/js/wangEditor'

Vue.config.productionTip = false
Vue.prototype.wangEditor = wangEditor
new Vue({
  render: h => h(App),
}).$mount('#app')
