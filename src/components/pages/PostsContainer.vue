<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Навигационная панель -->
    <!-- Контент -->
    <PageLoader v-if="isPageLoading" />
    <div
      v-else
      class="w-full flex justify-between gap-[20px] px-[150px] py-[50px]"
    >
      <div v-if="posts.length" class="w-full flex flex-col gap-[20px]">
        <div class="flex gap-[5px]">
          <el-input
            @keydown.enter="handleSearch"
            v-model="searchValue"
            size="large"
            placeholder="Поиск публикаций..."
          />
          <el-button @click="handleSearch" size="large" type="primary">
            Найти
          </el-button>
        </div>
        <PostCard :post="post" v-for="post in allPosts" :key="post.id" />
      </div>
      <p v-else class="text-center font-[700] text-[30px]">
        Список постов пуст
      </p>
      <div v-if="currentUser" class="flex flex-col gap-[20px]">
        <TagsList :tags="tags" />
        <el-button @click="gotoCreatePage" type="success" size="large"
          >СОЗДАТЬ ПУБЛИКАЦИЮ</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia"
import PostCard from "../posts/PostCard.vue"
import TagsList from "../tags/TagsList.vue"
import { usePostsStore } from "@/stores/postsStore"
import PageLoader from "@/components/PageLoader.vue"
import { useUserStore } from "@/stores/userStore"

export default {
  data() {
    return {
      searchValue: "",
      isPageLoading: false
    }
  },
  components: {
    PostCard,
    TagsList,
    PageLoader
  },
  async mounted() {
    this.isPageLoading = true
    await this.postsStore.getAllPosts()
    this.isPageLoading = false
  },
  computed: {
    ...mapStores(usePostsStore, useUserStore),
    allPosts() {
      return this.postsStore.posts
    },
    currentUser() {
      return this.usersStore.currentUser
    },
    posts() {
      // мок данные потом подогнать надо под овтет серва

      let posts = [
        {
          id: "123123",
          text: "текст поста",
          title: "пост",
          tags: ["ai", "vue"],
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
        },
        {
          id: "123123",
          text: "текст поста",
          title: "пост 2",
          tags: ["test"],
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
        },
        {
          id: "123123",
          text: "текст поста",
          title: "заголовок поста 3",
          tags: ["aga"],
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
      if (this.$route.query.tag) {
        posts = posts.filter((post) =>
          post.tags.includes(this.$route.query.tag)
        )
      }
      if (this.$route.query.search) {
        posts = posts.filter((post) =>
          post.title.includes(this.$route.query.search)
        )
      }
      return posts
    },
    tags() {
      // мок данные потом подогнать надо под овтет серва
      // теги по идее вообще можно нигде не хранить но сказать что хранишь
      // и придумать просто 5 типо часто используемых чтобы по ним фильтр был

      return ["label", "vue", "node", "ai"]
    }
  },
  methods: {
    gotoCreatePage() {
      this.$router.push("/posts/new")
    },
    handleSearch() {
      if (this.searchValue.length) {
        this.$router.replace({
          name: this.$route.name,
          query: {
            ...this.$route.query,
            search: this.searchValue
          }
        })
      }
    }
  }
}
</script>
