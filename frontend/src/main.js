import Vue from 'vue'
import VueNumber from 'vue-number-animation';
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'



Vue.use(ElementUI);
Vue.use(VueNumber);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
