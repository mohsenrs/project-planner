import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import AddProject from "../views/AddProject";
import EditProject from "../views/EditProject";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add",
    name: "AddProject",
    component: AddProject,
  },
  {
    path: "/projects/:id",
    name: "EditProject",
    component: EditProject,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
