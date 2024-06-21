import AccountPage from "@/components/pages/AccountPage.vue"
import LoginPage from "@/components/pages/LoginPage.vue"
import PostCreation from "@/components/pages/PostCreation"
import PostDetails from "@/components/pages/PostDetails.vue"
import PostsContainer from "@/components/pages/PostsContainer.vue"
import RegisterPage from "@/components/pages/RegisterPage.vue"
import FullPost from "@/components/posts/FullPost.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/",
    name: "HomePage",
    redirect: "/posts"
  },
  {
    path: "/posts",
    name: "PostsPage",
    component: PostsContainer
  },
  {
    path: "/posts/:id", //чет тут children не хочет нормально работать сделал по тупому
    name: "fullPost",
    component: FullPost
  },
  {
    path: "/account",
    name: "AccountPage",
    component: AccountPage
  },
  {
    path: "/post-details/:id",
    name: "PostDetails",
    component: PostDetails
  },
  {
    path: "/post-creation",
    name: "PostCreation",
    component: PostCreation
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
