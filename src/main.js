import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import VueMeta from 'vue-meta';

import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(BootstrapVue);
Vue.use(VueMeta);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App }
}).$mount('#app')
