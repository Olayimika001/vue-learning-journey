import { createRouter, createWebHistory } from "vue-router";
import Blog from "../views/blog.vue";
import PostDetail from "../views/PostDetails.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/blog"
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
    },
    {
      path: "/post/:id",
      name: "PostDetail",
      component: PostDetail,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;