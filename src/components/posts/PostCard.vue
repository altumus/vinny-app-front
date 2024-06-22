<template>
  <div
    class="w-full min-w-[350px] group hover:translate-y-[-5px] transition duration-300 flex flex-col rounded-[8px] shadow-lg border-[2px] border-gray-700 overflow-hidden"
  >
    <img
      v-if="post.cover"
      class="w-[100%] h-[300px] object-cover"
      :src="post.cover"
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
          v-for="tag in post.PostsTag"
          :key="tag"
          class="bg-blue-100 px-[5px] py-[2px] rounded-[4px]"
        >
          #{{ tag }}
        </span>
      </div>
      <div class="flex mt-[10px] justify-start">
        <el-button
          @click="gotoFullPost"
          type="primary"
          class="w-[200px] !rounded-[20px]"
        >
          Подробнее...
        </el-button>
      </div>
      <div class="flex justify-between items-center mt-[10px]">
        <div class="flex flex-row gap-[5px] items-center">
          <UserAvatar
            class="w-[24px] h-[24px] object-cover rounded-[100%]"
            :src="post.creator.avatar"
          />
          <p class="font-[700] text-[13px] max-w-full">
            {{ post.creator.name }}
          </p>
        </div>
        <div class="flex gap-[10px] justify-end">
          <!-- <div class="flex gap-[3px] text-gray-500 text-[11px] items-center">
            <mdicon name="update" size="18px" color="gray" />
            <span class="mt-[2px]">{{ updatedAt }}</span>
          </div> -->
          <div class="flex gap-[3px] text-gray-500 text-[11px] items-center">
            <mdicon name="eye" size="18px" color="gray" />
            <span class="mt-[2px]">{{ post.postViewes }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserAvatar from "@/components/common/UserAvatar.vue"

export default {
  name: "PostCard",
  components: {
    UserAvatar
  },
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
      if (!this.post) return
      return new Date(this.post.createdAt).toLocaleDateString()
    },
    updatedAt() {
      if (!this.post) return
      return new Date(this.post.updatedAt).toLocaleString()
    }
  },
  methods: {
    gotoFullPost() {
      this.$router.push(`/posts/${this.post.id}`)
    }
  }
}
</script>
