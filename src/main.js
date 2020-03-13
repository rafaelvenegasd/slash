import './assets/sass/main.scss';
import Vue from 'vue'
import './components/main.vue';
import App from './components/main.vue';

// App
new Vue({
    render: el => el(App)
}).$mount("#content");





