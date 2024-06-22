<template>
  <div
    class="flex-col sm:flex-row flex w-full items-start h-full py-[20px] overflow-hidden justify-between gap-[20px] px-[100px]"
  >
    <div
      style="border: 1px solid gray"
      class="bg-gray-100 rounded-[8px] flex flex-col gap-[20px] items-center p-[20px] shadow-md h-full"
    >
      <div
        class="w-[300px] h-[300px] flex-none overflow-hidden relative group rounded-[100%] shadow-md border-[1px] border-gray-500"
      >
        <div @click="handleClickAvatar" class="absolute w-full h-full">
          <div
            class="opacity-0 text-white group-hover:opacity-100 flex transition-opacity duration-300 ease-in-out justify-center items-center w-full h-full bg-black/50 cursor-pointer"
          >
            <mdicon name="camera" size="100px" />
          </div>
        </div>
        <input
          accept=".jpg,.gif,.png"
          @change="handleFileChange"
          ref="inputRef"
          class="hidden"
          type="file"
        />

        <UserAvatar
          class="w-[300px] h-[300px] rounded-full"
          :src="formattedUser.avatar"
        />
      </div>
      <div class="flex flex-col justify-between h-full w-full gap-y-[30px]">
        <div
          class="text-[25px] text-left flex justify-start gap-[20px] flex-col"
        >
          <div class="flex items-center gap-[5px]">
            <mdicon name="account-outline" size="32px" color="black" />
            <p class="max-w-[350px] truncate">{{ formattedUser?.name }}</p>
          </div>
          <div class="flex items-center gap-[5px]">
            <mdicon name="email-outline" size="32px" color="black" />
            <p class="max-w-[350px] truncate">{{ formattedUser?.email }}</p>
          </div>
          <div class="flex items-center gap-[5px]">
            <mdicon name="calendar-outline" size="32px" color="black" />
            <p class="max-w-[350px] truncate">{{ formattedUser?.createdAt }}</p>
          </div>
        </div>

        <div class="flex flex-col w-full">
          <el-button
            @click="showUpdateDialog = true"
            class="w-full my-[10px]"
            type="success"
          >
            Изменить данные
          </el-button>
          <el-button @click="logout" class="w-full !m-0" type="danger">
            Выход
          </el-button>
        </div>
      </div>
    </div>
    <div
      style="border: 1px solid gray"
      class="bg-gray-100 border rounded-[8px] w-full flex flex-col gap-[20px] items-center p-[20px] shadow-md h-full"
    >
      <div class="flex items-center text-[25px] gap-[5px]">
        <mdicon name="post-outline" size="52px" color="black" />
        <p>Мои публикации</p>
      </div>
      <div
        class="h-full max-h-[500px] w-full flex flex-col gap-[10px] overflow-y-auto py-[10px]"
      >
        <div
          v-for="post in posts"
          :key="post.id"
          class="shadow-md rounded-[8px] group flex items-center h-[50px] justify-between hover:bg-gray-300 cursor-pointer transition duration-200 p-[15px] bg-gray-200"
        >
          <span>{{ post.name }}</span>
          <div class="hidden group-hover:flex items-center gap-[5px]">
            <el-button size="small" @click="gotoPost(post.id)">
              Перейти к посту
            </el-button>
            <el-button
              type="danger"
              size="small"
              @click="deletePost(post.id)"
              class="hidden group-hover:flex hover:bg-gray-400 w-[24px] !m-0 h-[24px] justify-center items-center rounded-[4px] transition duration-200 text-white"
            >
              <mdicon name="delete" size="24px" />
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <el-dialog v-model="showUpdateDialog" title="Изменить данные" width="500">
    <div class="w-full flex flex-col gap-[10px]">
      <el-input v-model="updateData.email" placeholder="Email" />
      <el-input v-model="updateData.name" placeholder="Имя" />
      <el-input
        v-model="updateData.password"
        type="password"
        placeholder="Пароль"
      />
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="showUpdateDialog = false">Отмена</el-button>
        <el-button type="primary" @click="updateUserData">
          Подтвердить
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
import { ref, computed } from "vue"
import { mapStores } from "pinia"
import { useUserStore } from "@/stores/userStore"
import * as Utils from "@/utils/userHandler"

import UserAvatar from "@/components/common/UserAvatar.vue"

export default {
  components: {
    UserAvatar
  },
  data() {
    return {
      showUpdateDialog: false,
      updateData: {
        email: "",
        password: "",
        name: ""
      }
    }
  },
  mounted() {
    if (this.userData) {
      this.updateData.name = this.userData.fullName
      this.updateData.email = this.userData.email
    }
  },
  computed: {
    ...mapStores(useUserStore),
    currentUser() {
      return this.usersStore.currentUser
    },
    formattedUser() {
      const data = {
        ...this.currentUser,
        createdAt: new Date().toLocaleDateString()
      }

      return data
    },
    posts() {
      return [
        {
          id: "123",
          name: "Название поста"
        },
        {
          id: "123",
          name: "Название поста"
        },
        {
          id: "123",
          name: "Название поста"
        },
        {
          id: "123",
          name: "Название поста"
        },
        {
          id: "123",
          name: "Название поста"
        },
        {
          id: "123",
          name: "Название поста"
        },
        {
          id: "123",
          name: "Название поста"
        },
        {
          id: "123",
          name: "Название поста"
        },
        {
          id: "123",
          name: "Название поста"
        },
        {
          id: "123",
          name: "Название поста"
        },
        {
          id: "123",
          name: "Название поста"
        },
        {
          id: "123",
          name: "Название поста"
        }
      ]
    },
    userData() {
      return {
        id: "123",
        email: "kaka@gmail.com",
        fullName: "Егор Пантелеев",
        avatarUrl:
          "https://cdnstatic.rg.ru/uploads/images/162/37/74/1_a04fbaa5.jpg",
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString()
      }
    }
  },
  methods: {
    updateUserData() {
      const dataToUpdate = {
        id: "userId",
        name: this.updateData.name.length ? this.updateData.name : undefined,
        password: this.updateData.password.length
          ? this.updateData.password
          : undefined,
        email: this.updateData.email.length ? this.updateData.email : undefined
      }
      alert("Тут валидацию емейла и запрос на смену данных и нотифай если хош")
      console.log(dataToUpdate)
      this.showUpdateDialog = false
    },
    deletePost(id) {
      if (window.confirm("Вы дейтсвительно хотите удалить пост?"))
        alert("post deleted")
    },
    gotoPost(id) {
      this.$router.push(`/posts/${id}`)
    },
    logout() {
      if (window.confirm("Вы дейтсвительно хотите выйти?")) {
        this.usersStore.logoutLocally()
        this.$router.push("/posts")
      }
    }
  }
}
</script>
