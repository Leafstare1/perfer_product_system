/*import { createApp } from 'vue'
import './style.css'
import App from './App.vue'*/
//import router from './router'


//createApp(App).mount('#app')
/*new VueElement({
    el: "#app",
    components: { App },
    template: "<App/>",
    router /
});
*/
// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
//import router from './router';
import './style.css'


//createApp(App).use(router).mount('#app');
createApp(App).mount('#app');

