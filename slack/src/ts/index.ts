
import Vue from 'vue';
import App from '../component/App.vue'
import router from './router.ts'

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  el: '#App',
  template: '<App/>',
  components: { App },
  router
});