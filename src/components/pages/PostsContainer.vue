<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Навигационная панель -->

    <!-- Контент -->
    <div class="w-full flex justify-between gap-[20px] px-[150px] py-[50px]">
      <PostCard :post="post" v-for="post in posts" :key="post.id" />
      <TagsList :tags="tags" />
    </div>
  </div>
</template>

<script>
import PostCard from "../posts/PostCard.vue"
import TagsList from "../tags/TagsList.vue"

export default {
  components: {
    PostCard,
    TagsList
  },
  computed: {
    posts() {
      // мок данные потом подогнать надо под овтет серва
      return [
        {
          id: "123123",
          text: "текст поста",
          title: "заголовок поста",
          tags: ["pizdec", "aga"],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          viewsCount: 123,
          imageUrl:
            "https://cdnstatic.rg.ru/uploads/images/162/37/74/1_a04fbaa5.jpg",
          user: {
            id: "123",
            email: "kaka@gmail.com",
            fullName: "Егор Пантелеев",
            avatarUrl:
              "https://cdnstatic.rg.ru/uploads/images/162/37/74/1_a04fbaa5.jpg",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
        }
      ]
    },
    tags() {
      // мок данные потом подогнать надо под овтет серва

      return ["react", "vue", "pizda", "angular"]
    }
  }
}
</script>
