<template>
  <img v-if="src" :src="src" />
  <UserAvatarPlaceholder v-else />
</template>

<script>
import UserAvatarPlaceholder from "@/components/common/UserAvatarPlaceholder.vue"

export default {
  components: {
    UserAvatarPlaceholder
  },
  props: {
    src: {
      type: String,
      default: ""
    }
  }
}
</script>
