
import Vue from 'vue';
import App from '../component/App.vue'

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  el: '#App',
  template: '<App/>',
  components: { App },
});