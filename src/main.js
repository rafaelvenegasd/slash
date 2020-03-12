import './assets/sass/main.scss';
import Vue from 'vue'
import './assets/components/main.vue';
import App from './assets/components/main.vue';

new Vue({
    render: el => el(App)
}).$mount("#content");




