import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
 
import Login from "../view/Login.vue"
import Home from "../view/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
		name: "index",
		// component: Login,
		component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
 

export default router