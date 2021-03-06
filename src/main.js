import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import VueMeta from 'vue-meta'
import '@/assets/scss/app.scss';

Vue.config.productionTip = false

Vue.use(VueMeta)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
