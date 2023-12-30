import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layouts/Layout.vue";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import NotFound from "../views/NotFound.vue";
import Projects from "../views/Projects.vue";
import Timeline from "../views/Timeline.vue";
import Philosophy from "../views/Philosophy.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        { path: "", name: "home", component: Home },
        { path: ":pathMatch(.*)*", name: "not-found", component: NotFound },
        { path: "projects", name: "projects", component: Projects },
        { path: "timeline", name: "timeline", component: Timeline },
        { path: "blog", name: "blog", component: Blog },
        { path: "blog/:id", name: "BlogPost", component: () => import('../views/BlogPostView.vue') },
        { path: "philosophy", name: "Philosophy", component: Philosophy },
      ],
    },
  ],
});


export default router;
