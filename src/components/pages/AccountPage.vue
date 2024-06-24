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
        <div @click="showAvatarDialog = true" class="absolute w-full h-full">
          <div
            class="opacity-0 text-white group-hover:opacity-100 flex transition-opacity duration-300 ease-in-out justify-center items-center w-full h-full bg-black/50 cursor-pointer"
          >
            <mdicon name="camera" size="100px" />
          </div>
        </div>

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
        v-if="!isPostsLoading"
        class="h-full max-h-[500px] w-full flex flex-col gap-[10px] overflow-y-auto py-[10px]"
      >
        <div
          v-for="post in posts"
          :key="post.id"
          class="shadow-md rounded-[8px] group flex justify-between items-center gap-x-[10px] hover:bg-gray-300 cursor-pointer transition duration-200 p-[15px] bg-gray-200"
        >
          <div class="flex items-center gap-x-[10px]">
            <div class="flex flex-col gap-y-[5px] items-center">
              <div class="flex items-center gap-x-[10px]">
                <svg
                  class="h-[12px] w-[12px]"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9752 12.1852L20.2361 12.0574L20.9752 12.1852ZM20.2696 16.265L19.5306 16.1371L20.2696 16.265ZM6.93777 20.4771L6.19056 20.5417L6.93777 20.4771ZM6.12561 11.0844L6.87282 11.0198L6.12561 11.0844ZM13.995 5.22142L14.7351 5.34269V5.34269L13.995 5.22142ZM13.3323 9.26598L14.0724 9.38725V9.38725L13.3323 9.26598ZM6.69814 9.67749L6.20855 9.10933H6.20855L6.69814 9.67749ZM8.13688 8.43769L8.62647 9.00585H8.62647L8.13688 8.43769ZM10.5181 4.78374L9.79208 4.59542L10.5181 4.78374ZM10.9938 2.94989L11.7197 3.13821V3.13821L10.9938 2.94989ZM12.6676 2.06435L12.4382 2.77841L12.4382 2.77841L12.6676 2.06435ZM12.8126 2.11093L13.042 1.39687L13.042 1.39687L12.8126 2.11093ZM9.86195 6.46262L10.5235 6.81599V6.81599L9.86195 6.46262ZM13.9047 3.24752L13.1787 3.43584V3.43584L13.9047 3.24752ZM11.6742 2.13239L11.3486 1.45675V1.45675L11.6742 2.13239ZM3.9716 21.4707L3.22439 21.5353L3.9716 21.4707ZM3 10.2342L3.74721 10.1696C3.71261 9.76945 3.36893 9.46758 2.96767 9.4849C2.5664 9.50221 2.25 9.83256 2.25 10.2342H3ZM20.2361 12.0574L19.5306 16.1371L21.0087 16.3928L21.7142 12.313L20.2361 12.0574ZM13.245 21.25H8.59635V22.75H13.245V21.25ZM7.68498 20.4125L6.87282 11.0198L5.3784 11.149L6.19056 20.5417L7.68498 20.4125ZM19.5306 16.1371C19.0238 19.0677 16.3813 21.25 13.245 21.25V22.75C17.0712 22.75 20.3708 20.081 21.0087 16.3928L19.5306 16.1371ZM13.2548 5.10015L12.5921 9.14472L14.0724 9.38725L14.7351 5.34269L13.2548 5.10015ZM7.18773 10.2456L8.62647 9.00585L7.64729 7.86954L6.20855 9.10933L7.18773 10.2456ZM11.244 4.97206L11.7197 3.13821L10.2678 2.76157L9.79208 4.59542L11.244 4.97206ZM12.4382 2.77841L12.5832 2.82498L13.042 1.39687L12.897 1.3503L12.4382 2.77841ZM10.5235 6.81599C10.8354 6.23198 11.0777 5.61339 11.244 4.97206L9.79208 4.59542C9.65573 5.12107 9.45699 5.62893 9.20042 6.10924L10.5235 6.81599ZM12.5832 2.82498C12.8896 2.92342 13.1072 3.16009 13.1787 3.43584L14.6307 3.05921C14.4252 2.26719 13.819 1.64648 13.042 1.39687L12.5832 2.82498ZM11.7197 3.13821C11.7548 3.0032 11.8523 2.87913 11.9998 2.80804L11.3486 1.45675C10.8166 1.71309 10.417 2.18627 10.2678 2.76157L11.7197 3.13821ZM11.9998 2.80804C12.1345 2.74311 12.2931 2.73181 12.4382 2.77841L12.897 1.3503C12.3873 1.18655 11.8312 1.2242 11.3486 1.45675L11.9998 2.80804ZM14.1537 10.9842H19.3348V9.4842H14.1537V10.9842ZM4.71881 21.4061L3.74721 10.1696L2.25279 10.2988L3.22439 21.5353L4.71881 21.4061ZM3.75 21.5127V10.2342H2.25V21.5127H3.75ZM3.22439 21.5353C3.2112 21.3828 3.33146 21.25 3.48671 21.25V22.75C4.21268 22.75 4.78122 22.1279 4.71881 21.4061L3.22439 21.5353ZM14.7351 5.34269C14.8596 4.58256 14.8241 3.80477 14.6307 3.0592L13.1787 3.43584C13.3197 3.97923 13.3456 4.54613 13.2548 5.10016L14.7351 5.34269ZM8.59635 21.25C8.12244 21.25 7.72601 20.887 7.68498 20.4125L6.19056 20.5417C6.29852 21.7902 7.3427 22.75 8.59635 22.75V21.25ZM8.62647 9.00585C9.30632 8.42 10.0392 7.72267 10.5235 6.81599L9.20042 6.10924C8.85404 6.75767 8.3025 7.30493 7.64729 7.86954L8.62647 9.00585ZM21.7142 12.313C21.9695 10.8365 20.8341 9.4842 19.3348 9.4842V10.9842C19.9014 10.9842 20.3332 11.4959 20.2361 12.0574L21.7142 12.313ZM3.48671 21.25C3.63292 21.25 3.75 21.3684 3.75 21.5127H2.25C2.25 22.1953 2.80289 22.75 3.48671 22.75V21.25ZM12.5921 9.14471C12.4344 10.1076 13.1766 10.9842 14.1537 10.9842V9.4842C14.1038 9.4842 14.0639 9.43901 14.0724 9.38725L12.5921 9.14471ZM6.87282 11.0198C6.8474 10.7258 6.96475 10.4378 7.18773 10.2456L6.20855 9.10933C5.62022 9.61631 5.31149 10.3753 5.3784 11.149L6.87282 11.0198Z"
                    fill="#1C274C"
                  />
                </svg>

                <span>{{ post.likes }}</span>
              </div>
              <div class="flex items-center gap-x-[10px]">
                <svg
                  class="h-[12px] w-[12px] rotate-180"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9752 12.1852L20.2361 12.0574L20.9752 12.1852ZM20.2696 16.265L19.5306 16.1371L20.2696 16.265ZM6.93777 20.4771L6.19056 20.5417L6.93777 20.4771ZM6.12561 11.0844L6.87282 11.0198L6.12561 11.0844ZM13.995 5.22142L14.7351 5.34269V5.34269L13.995 5.22142ZM13.3323 9.26598L14.0724 9.38725V9.38725L13.3323 9.26598ZM6.69814 9.67749L6.20855 9.10933H6.20855L6.69814 9.67749ZM8.13688 8.43769L8.62647 9.00585H8.62647L8.13688 8.43769ZM10.5181 4.78374L9.79208 4.59542L10.5181 4.78374ZM10.9938 2.94989L11.7197 3.13821V3.13821L10.9938 2.94989ZM12.6676 2.06435L12.4382 2.77841L12.4382 2.77841L12.6676 2.06435ZM12.8126 2.11093L13.042 1.39687L13.042 1.39687L12.8126 2.11093ZM9.86195 6.46262L10.5235 6.81599V6.81599L9.86195 6.46262ZM13.9047 3.24752L13.1787 3.43584V3.43584L13.9047 3.24752ZM11.6742 2.13239L11.3486 1.45675V1.45675L11.6742 2.13239ZM3.9716 21.4707L3.22439 21.5353L3.9716 21.4707ZM3 10.2342L3.74721 10.1696C3.71261 9.76945 3.36893 9.46758 2.96767 9.4849C2.5664 9.50221 2.25 9.83256 2.25 10.2342H3ZM20.2361 12.0574L19.5306 16.1371L21.0087 16.3928L21.7142 12.313L20.2361 12.0574ZM13.245 21.25H8.59635V22.75H13.245V21.25ZM7.68498 20.4125L6.87282 11.0198L5.3784 11.149L6.19056 20.5417L7.68498 20.4125ZM19.5306 16.1371C19.0238 19.0677 16.3813 21.25 13.245 21.25V22.75C17.0712 22.75 20.3708 20.081 21.0087 16.3928L19.5306 16.1371ZM13.2548 5.10015L12.5921 9.14472L14.0724 9.38725L14.7351 5.34269L13.2548 5.10015ZM7.18773 10.2456L8.62647 9.00585L7.64729 7.86954L6.20855 9.10933L7.18773 10.2456ZM11.244 4.97206L11.7197 3.13821L10.2678 2.76157L9.79208 4.59542L11.244 4.97206ZM12.4382 2.77841L12.5832 2.82498L13.042 1.39687L12.897 1.3503L12.4382 2.77841ZM10.5235 6.81599C10.8354 6.23198 11.0777 5.61339 11.244 4.97206L9.79208 4.59542C9.65573 5.12107 9.45699 5.62893 9.20042 6.10924L10.5235 6.81599ZM12.5832 2.82498C12.8896 2.92342 13.1072 3.16009 13.1787 3.43584L14.6307 3.05921C14.4252 2.26719 13.819 1.64648 13.042 1.39687L12.5832 2.82498ZM11.7197 3.13821C11.7548 3.0032 11.8523 2.87913 11.9998 2.80804L11.3486 1.45675C10.8166 1.71309 10.417 2.18627 10.2678 2.76157L11.7197 3.13821ZM11.9998 2.80804C12.1345 2.74311 12.2931 2.73181 12.4382 2.77841L12.897 1.3503C12.3873 1.18655 11.8312 1.2242 11.3486 1.45675L11.9998 2.80804ZM14.1537 10.9842H19.3348V9.4842H14.1537V10.9842ZM4.71881 21.4061L3.74721 10.1696L2.25279 10.2988L3.22439 21.5353L4.71881 21.4061ZM3.75 21.5127V10.2342H2.25V21.5127H3.75ZM3.22439 21.5353C3.2112 21.3828 3.33146 21.25 3.48671 21.25V22.75C4.21268 22.75 4.78122 22.1279 4.71881 21.4061L3.22439 21.5353ZM14.7351 5.34269C14.8596 4.58256 14.8241 3.80477 14.6307 3.0592L13.1787 3.43584C13.3197 3.97923 13.3456 4.54613 13.2548 5.10016L14.7351 5.34269ZM8.59635 21.25C8.12244 21.25 7.72601 20.887 7.68498 20.4125L6.19056 20.5417C6.29852 21.7902 7.3427 22.75 8.59635 22.75V21.25ZM8.62647 9.00585C9.30632 8.42 10.0392 7.72267 10.5235 6.81599L9.20042 6.10924C8.85404 6.75767 8.3025 7.30493 7.64729 7.86954L8.62647 9.00585ZM21.7142 12.313C21.9695 10.8365 20.8341 9.4842 19.3348 9.4842V10.9842C19.9014 10.9842 20.3332 11.4959 20.2361 12.0574L21.7142 12.313ZM3.48671 21.25C3.63292 21.25 3.75 21.3684 3.75 21.5127H2.25C2.25 22.1953 2.80289 22.75 3.48671 22.75V21.25ZM12.5921 9.14471C12.4344 10.1076 13.1766 10.9842 14.1537 10.9842V9.4842C14.1038 9.4842 14.0639 9.43901 14.0724 9.38725L12.5921 9.14471ZM6.87282 11.0198C6.8474 10.7258 6.96475 10.4378 7.18773 10.2456L6.20855 9.10933C5.62022 9.61631 5.31149 10.3753 5.3784 11.149L6.87282 11.0198Z"
                    fill="#1C274C"
                  />
                </svg>

                <span>{{ post.likes }}</span>
              </div>

              <div class="flex items-center gap-x-[10px]">
                <mdicon name="eye" size="12px" />
                <span>{{ post.postViewes }}</span>
              </div>
            </div>

            <div v-if="post.cover" class="flex h-full">
              <img
                class="w-[100px] rounded-[8px] h-[50px] object-cover"
                :src="post.cover"
              />
            </div>

            <div class="flex flex-col gap-y-[10px]">
              <span
                class="max-w-[500px] truncate overflow-x-hidden text-[21px] font-bold"
              >
                {{ post.title }}
              </span>

              <div
                v-html="post.content"
                class="max-w-[500px] max-h-[100px] overflow-y-hidden !truncate"
              />
            </div>
          </div>

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

        <div
          class="h-full gap-y-[20px] max-h-[500px] items-center w-full flex flex-col gap-[10px] overflow-y-auto py-[10px]"
        >
          <div class="text-[24px]">
            У вас пока нет публикаций. Самое время создать!
          </div>
          <div class="flex">
            <router-link to="posts/new">
              <el-button type="success" size="large">
                СОЗДАТЬ ПУБЛИКАЦИЮ
              </el-button>
            </router-link>
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
        <el-button type="primary" @click="updateUser"> Подтвердить </el-button>
      </div>
    </template>
  </el-dialog>

  <el-dialog v-model="showAvatarDialog" title="Изменить аватарку" width="290">
    <div class="flex flex-col gap-y-[20px]">
      <VueAvatar
        @vue-avatar-editor:image-ready="onImageReady"
        ref="vueavatar"
        class="w-full"
      />
      <div class="flex flex-col gap-y-[10px] w-full">
        <el-button
          v-if="!showChangeAvatarButton"
          @click="updateAvatar"
          class="w-full"
          type="success"
        >
          Сбросить аватарку
        </el-button>
        <el-button v-else @click="updateAvatar" class="w-full" type="success">
          Изменить
        </el-button>
        <el-button
          @click="showAvatarDialog = false"
          class="w-full !m-0"
          type="danger"
        >
          Отмена
        </el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import { ref, computed } from "vue"
import { mapStores } from "pinia"
import { useUserStore } from "@/stores/userStore"
import * as Utils from "@/utils/userHandler"
import { VueAvatar } from "vue-avatar-editor-improved"

import UserAvatar from "@/components/common/UserAvatar.vue"
import { usePostsStore } from "@/stores/postsStore"

export default {
  components: {
    UserAvatar,
    VueAvatar
  },
  data() {
    return {
      showUpdateDialog: false,
      showAvatarDialog: false,
      showChangeAvatarButton: false,
      isPostsLoading: false,
      updateData: {
        email: "",
        password: "",
        name: ""
      }
    }
  },
  async mounted() {
    this.isPostsLoading = true
    await this.postsStore.getMyPosts(this.currentUser.id)
    this.isPostsLoading = false
  },
  watch: {
    showUpdateDialog(value) {
      if (value) {
        this.updateData.name = this.currentUser.name
        this.updateData.email = this.currentUser.email
      }
    }
  },
  computed: {
    ...mapStores(useUserStore, usePostsStore),
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
      return this.postsStore.posts
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
    onImageReady() {
      this.showChangeAvatarButton = true
    },
    async updateAvatar() {
      const avatarRef = this.$refs.vueavatar
      if (!avatarRef) return

      if (!this.showChangeAvatarButton) {
        await this.usersStore.updateUser(
          this.currentUser.id,
          null,
          this.currentUser.email,
          null,
          this.currentUser.name
        )
        this.showAvatarDialog = false

        return
      }

      if (avatarRef.imageChanged()) {
        const avatarBase64 = avatarRef.getImageScaled().toDataURL("image/jpeg")
        await this.usersStore.updateUser(
          this.currentUser.id,
          avatarBase64,
          this.currentUser.email,
          null,
          this.currentUser.name
        )
        this.showAvatarDialog = false
      }
    },
    async updateUser() {
      const userData = Utils.getEmailAndHash()

      const data = {
        id: this.currentUser.id,
        avatar: this.currentUser.avatar,
        hash: this.updateData.password ? this.updateData.password : null,
        email: this.updateData.email ? this.updateData.email : userData.email,
        name: this.updateData.name
          ? this.updateData.name
          : this.currentUser.name
      }

      await this.usersStore.updateUser(
        data.id,
        data.avatar,
        data.email,
        data.hash,
        data.name
      )

      this.showUpdateDialog = false
    },
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
    async deletePost(id) {
      if (window.confirm("Вы дейтсвительно хотите удалить пост?")) {
        await this.postsStore.deletePost(id)
      }
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
