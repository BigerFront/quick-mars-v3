import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
// import "roboto-fontface/css/roboto/roboto-fontface.css";
import '@fontsource/open-sans';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false;

const qk3 = new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');

process.env.NODE_ENV === 'development' && (global.$qk3 = qk3);
