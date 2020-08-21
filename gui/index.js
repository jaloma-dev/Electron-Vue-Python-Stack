
import './assets/styles/index.scss';

import Vue from 'vue';
import App from './App.vue';
import router from './router/index';

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    components: { App },
    render: h => h(App)
})