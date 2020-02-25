import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './store/store.js'
import router from './router';
Vue.config.productionTip = false;

new Vue({
    store: store,
    router: router,
    vuetify,
    render: h => h(App)
}).$mount('#app');