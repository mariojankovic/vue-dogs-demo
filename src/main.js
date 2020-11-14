import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import Pocetna from "./views/Pocetna.vue";
import Pasmine from "./views/Pasmine.vue";
import Pasmina from "./views/Pasmina.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Pocetna
  },
  {
    path: "/pasmine",
    component: Pasmine
  },
  {
    path: "/pasmine/:naziv",
    component: Pasmina
  }
];

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
