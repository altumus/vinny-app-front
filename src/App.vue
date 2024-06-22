<template>
  <div class="flex w-full flex-col">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import * as Utils from "@/utils/userHandler"
import { mapStores } from "pinia"
import { useUserStore } from "./stores/userStore"

export default {
  components: {
    NavBar
  },
  computed: {
    ...mapStores(useUserStore)
  },
  async mounted() {
    await this.initApp()
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
        this.$router.push("/posts")
      }
    }
  }
}
</script>
