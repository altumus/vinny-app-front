<template>
  <div
    class="w-full min-w-[350px] group hover:translate-y-[-5px] transition duration-300 flex flex-col rounded-[8px] shadow-lg border-[2px] border-gray-700 overflow-hidden"
  >
    <img
      v-if="post.imageUrl"
      class="w-[100%] h-[300px] object-cover"
      :src="post.imageUrl"
      alt="post img"
    />
    <div
      class="bg-gray-100 group-hover:bg-gray-200 transition duration-200 p-[10px] flex flex-col gap-[8px]"
    >
      <p class="font-[700] text-[21px] line-clamp-2">{{ post.title }}</p>
      <div class="flex gap-[5px] items-center">
        <mdicon name="calendar-check-outline" size="24px" color="black" />
        <p class="font-[700] text-[13px]">Опубликовано: {{ createdAt }}</p>
      </div>
      <div class="flex flex-wrap gap-[5px]">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="bg-blue-100 px-[5px] py-[2px] rounded-[4px]"
        >
          #{{ tag }}
        </span>
      </div>
      <div class="flex justify-between items-center mt-[20px]">
        <div class="flex flex-row gap-[5px] items-center">
          <img
            class="w-[24px] h-[24px] object-cover rounded-[100%]"
            :src="post.user.avatarUrl"
            alt="avatar"
          />
          <p class="font-[700] text-[13px]">{{ post.user.fullName }}</p>
        </div>
        <div class="flex gap-[10px] justify-end">
          <div class="flex gap-[3px] text-gray-500 text-[11px] items-center">
            <mdicon name="update" size="18px" color="gray" />
            <span class="mt-[2px]">{{ updatedAt }}</span>
          </div>
          <div class="flex gap-[3px] text-gray-500 text-[11px] items-center">
            <mdicon name="eye" size="18px" color="gray" />
            <span class="mt-[2px]">{{ post.viewsCount }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard",

  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    createdAt() {
      return new Date(this.post.createdAt).toLocaleDateString()
    },
    updatedAt() {
      return new Date(this.post.updatedAt).toLocaleString()
    }
  }
}
</script>
