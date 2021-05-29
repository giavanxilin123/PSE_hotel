import Vue from 'vue'
import VueNumber from 'vue-number-animation';
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'
import store from './store'


Vue.use(ElementUI, {locale});
Vue.use(VueNumber);

Vue.use(ElementUI,{ locale });


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
