import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/index",
      component: require("../components/Home/index.vue"),
      children: []
    },
    {
      name: "Detail",
      path: "/detail",
      component: require("../components/Detail/index.vue")
    }
  ]
});

export default router;
