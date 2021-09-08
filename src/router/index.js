import Vue from "vue";
import VueRouter from "vue-router";

import { ROUTE_NAME } from "./constants";
import AboutPage from "@/pages/AboutPage.vue";
// import BlogPage from "@/pages/BlogPage.vue";
import HomePage from "@/pages/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: `/${ROUTE_NAME.ABOUT}`,
    name: "About",
    component: AboutPage,
  },
  // {
  //   path: `/${ROUTE_NAME.BLOG}`,
  //   name: "Blog",
  //   component: BlogPage,
  // },
  {
    // Default redirect for non-existant routes
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default router;
