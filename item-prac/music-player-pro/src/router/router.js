import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from '@/components/Home/index.vue'
import Detail from '@/components/Detail'

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      name: "Detail",
      path: "/detail",
      component: Detail
    }
  ]
});

export default router;
