import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import routes from './components/router/index.js'
import VueScrollactive from 'vue-scrollactive';

Vue.use(VueScrollactive);

Vue.use(BootstrapVue)

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
