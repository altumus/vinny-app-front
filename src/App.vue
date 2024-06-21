<template>
  <div class="flex w-full flex-col">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"

export default {
  components: {
    NavBar
  }
}
</script>
