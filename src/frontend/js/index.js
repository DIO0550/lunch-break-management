
import Vue from 'vue';
import App from '../component/App';

Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  el: '#App',
  template: '<app/>',
  components: {App},
});