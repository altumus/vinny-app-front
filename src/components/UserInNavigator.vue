<template>
  <div
    class="flex w-full gap-x-[10px] items-center hover:bg-blue-300 px-[10px] py-[5px] rounded-[8px]"
  >
    <UserAvatar
      class="h-[30px] w-[30px] rounded-full border-[3px] border-solid border-white"
      :src="user.avatar"
    />

    <div class="flex flex-col">
      <span class="text-[16px] font-bold">{{ user.name }}</span>
    </div>
  </div>
</template>

<script>
import UserAvatar from "@/components/common/UserAvatar.vue"

export default {
  components: {
    UserAvatar
  },
  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
