// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App'
import router from './router'

import cm from './js/common'
import './css/app.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import icon from 'vicon'
import './static/icon/iconfont'

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.component('icon', icon);

cm.bus = new Vue();

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
