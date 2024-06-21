<template>
  <div
    class="w-full py-[50px] relative px-[100px] min-w-[350px] flex flex-col overflow-hidden"
  >
    <label
      for="fileInput"
      class="absolute cursor-pointer hover:text-blue-300 hover:transition duration-200 text-white bg-black/50 p-[5px] rounded-[4px]"
    >
      <mdicon name="pencil" size="35px" color="gray" />
    </label>
    <input
      class="hidden"
      id="fileInput"
      type="file"
      @change="handleChangePostImage($event)"
    />
    <img
      v-if="post.imageUrl"
      class="w-[100%] h-[550px] object-cover rounded-[8px]"
      :src="post.imageUrl"
      alt="post img"
    />
    <div
      class="bg-gray-100 transition duration-200 p-[10px] flex flex-col rounded-[8px] border-gray-700 gap-[8px]"
    >
      <p class="font-[700] text-[30px] line-clamp-2">{{ post.title }}</p>
      <div class="flex gap-[5px] items-center">
        <mdicon name="calendar-check-outline" size="24px" color="black" />
        <p class="font-[700] text-[13px]">
          Опубликовано {{ createdAt }} | {{ post.viewsCount }} просмотра
        </p>
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
      <div class="flex flex-row gap-[5px] items-center">
        <img
          class="w-[24px] h-[24px] object-cover rounded-[100%]"
          :src="post.user.avatarUrl"
          alt="avatar"
        />
        <p class="font-[700] text-[13px]">{{ post.user.fullName }}</p>
      </div>
      <div v-if="!isEdit" class="my-[20px]" v-html="post.text" />
      <Editor @save="saveText" v-else :text="post.text" />
      <el-button
        type="success"
        v-if="!isEdit"
        @click="isEdit = true"
        class="w-[200px]"
        >Редактировать статью
      </el-button>
      <div class="flex mt-[20px] gap-[5px] items-center">
        <mdicon name="comment-outline" />
        <p>Комментарии</p>
      </div>
      <el-input
        v-model="commentText"
        placeholder="Напишите комментарий"
        type="textarea"
      />
      <div class="flex w-full justify-end">
        <el-button @click="createComment" class="w-[150px]" type="primary"
          >Отправить</el-button
        >
      </div>
      <div
        v-for="comment in comments"
        :key="comment.id"
        class="bg-gray-200 relative p-[20px] rounded-[8px]"
      >
        <div class="absolute right-[10px] top-[10px]">
          <el-dropdown trigger="click">
            <div
              class="bg-gray-400 rounded-[4px] flex items-center justify-center w-[20px] h-[20px]"
            >
              <mdicon name="dots-horizontal" size="18px" color="gray" />
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Изменить</el-dropdown-item>
                <el-dropdown-item>Удалить</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div class="flex flex-row gap-[5px] text-gray-500 items-center">
          <img
            class="w-[24px] h-[24px] object-cover rounded-[100%]"
            :src="comment.user.avatarUrl"
            alt="avatar"
          />
          <p class="font-[700] text-[13px]">{{ comment.user.fullName }}</p>
          <p>от {{ comment.createdAt }}</p>
        </div>
        <p class="p-[10px]">{{ comment.text }}</p>
      </div>
      <div class="flex justify-end items-center mt-[10px]">
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
import Editor from "../common/Editor.vue"

export default {
  components: {
    Editor
  },
  data() {
    return {
      commentText: "",
      isEdit: false
    }
  },
  computed: {
    post() {
      return {
        id: "123123",
        text: "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, enim minus. Eaque animi quos pariatur est tempora maiores, quasi accusamus et libero temporibus maxime reprehenderit dicta error nemo nulla ab!",
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
    },
    comments() {
      const comments = [
        {
          id: "123",
          text: "всем привет",
          createdAt: new Date("2024-03-01").toLocaleDateString(),
          user: {
            id: "123",
            email: "kaka@gmail.com",
            fullName: "Егор Пантелеев",
            avatarUrl:
              "https://cdnstatic.rg.ru/uploads/images/162/37/74/1_a04fbaa5.jpg",
            createdAt: new Date().toLocaleDateString(),
            updatedAt: new Date().toLocaleDateString()
          }
        },
        {
          id: "123",
          text: "всем привет",
          createdAt: new Date("2024-01-01").toLocaleDateString(),
          user: {
            id: "123",
            email: "kaka@gmail.com",
            fullName: "Егор Пантелеев",
            avatarUrl:
              "https://cdnstatic.rg.ru/uploads/images/162/37/74/1_a04fbaa5.jpg",
            createdAt: new Date().toLocaleDateString(),
            updatedAt: new Date().toLocaleDateString()
          }
        },
        {
          id: "123",
          text: "всем привет",
          createdAt: new Date("2024-02-01").toLocaleDateString(),
          user: {
            id: "123",
            email: "kaka@gmail.com",
            fullName: "Егор Пантелеев",
            avatarUrl:
              "https://cdnstatic.rg.ru/uploads/images/162/37/74/1_a04fbaa5.jpg",
            createdAt: new Date().toLocaleDateString(),
            updatedAt: new Date().toLocaleDateString()
          }
        }
      ]
      return comments.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )
    },
    createdAt() {
      return new Date(this.post.createdAt).toLocaleDateString()
    },
    updatedAt() {
      return new Date(this.post.updatedAt).toLocaleDateString()
    }
  },
  methods: {
    saveText(text) {
      console.log(text)
      alert("update post text")
      this.isEdit = false
    },
    handleChangePostImage(event) {
      const file = event.target.files[0]
      console.log(file)
      alert("handle file change")
    },
    createComment() {
      if (!this.commentText.length) return
      const data = {
        text: this.commentText,
        userId: "123123"
      }
      // запрос тут
      alert("comment created")
      this.commentText = ""
    }
  }
}
</script>
