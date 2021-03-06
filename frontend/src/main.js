// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import App from './App';

Vue.config.productionTip = false;

Vue.use(Buefy, {
  defaultIconPack: 'fa',
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
