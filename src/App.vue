<template>
  <PageLoader v-if="isPageLoading" />
  <div v-else class="flex w-full flex-col">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import * as Utils from "@/utils/userHandler"
import { mapStores } from "pinia"
import { useUserStore } from "./stores/userStore"
import PageLoader from "@/components/PageLoader.vue"

export default {
  components: {
    NavBar,
    PageLoader
  },
  computed: {
    ...mapStores(useUserStore)
  },
  data() {
    return {
      isPageLoading: false
    }
  },
  async mounted() {
    this.isPageLoading = true
    await this.initApp()
    this.isPageLoading = false
  },
  methods: {
    async initApp() {
      const userData = Utils.getEmailAndHash()

      if (!userData.hash?.length || !userData.email?.length) {
        this.usersStore.logoutLocally()
        this.redirectUnauthorized()
        return
      }

      try {
        console.log("user data", userData)
        await this.usersStore.login(userData.email, userData.hash)
      } catch (error) {
        console.log("error")
      }
    },
    redirectUnauthorized() {
      const authorizedRoutes = ["/post-creation", "/account"]
      if (authorizedRoutes.includes(this.$route.path)) {
        this.isPageLoading = false
        this.$router.push("/posts")
      }
    }
  }
}
</script>
