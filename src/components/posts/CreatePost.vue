<template>
  <div
    class="w-full py-[50px] px-[100px] relative min-w-[350px] flex flex-col overflow-hidden"
  >
    <div v-if="postData.image" class="mt-4">
      <img
        :src="postData.image"
        alt="Preview"
        class="w-[100%] h-[550px] object-cover rounded-[8px]"
      />
    </div>
    <div
      class="bg-gray-100 transition duration-200 p-[10px] flex flex-col rounded-[8px] border-gray-700 gap-[8px]"
    >
      <label
        class="bg-green-300 hover:bg-green-400 p-[10px] rounded-[4px] transition duration-200 w-[200px] shadow-md"
        for="fileInput"
        >Выбрать файл
      </label>

      <input
        class="hidden"
        id="fileInput"
        type="file"
        @change="handleChangePostImage($event)"
      />
      <el-input v-model="postData.title" placeholder="Заголовок поста..." />
      <div class="w-full flex flex-col gap-y-[10px]">
        <div
          v-html="postData.text"
          v-if="!isEdit || isModerateStarted"
          style="border: 1px solid gray"
          class="py-[20px] bg-white p-[10px] rounded-[8px]"
        />
        <Editor @save="saveText" v-else :text="postData.text" />

        <div class="flex gap-[5px]">
          <el-button
            type="success"
            v-if="!isEdit"
            @click="isEdit = true"
            class="w-[200px]"
            >Редактировать статью</el-button
          >
          <el-button
            type="primary"
            v-if="!isEdit && postData.text && postData.title"
            @click="savePost"
            class="w-[200px]"
            >Создать публикацию</el-button
          >
        </div>
      </div>

      <div class="flex flex-col mt-[20px] items-start gap-y-[20px]">
        <div class="flex gap-x-[20px] items-center">
          <svg
            class="h-[48px] w-[48px]"
            width="800px"
            height="800px"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="invisible_box" data-name="invisible box">
                <rect width="48" height="48" fill="none" />
              </g>
              <g id="Q3_icons" data-name="Q3 icons">
                <g>
                  <path
                    d="M17.9,2h-.4L7.6,6.6a1,1,0,0,0-.6.9v7.4l-.6.5-4,3.3a.8.8,0,0,0-.4.8v9a.9.9,0,0,0,.4.8l4,3.3.6.5v7.4a1,1,0,0,0,.6.9l9.9,4.5h.4l.6-.2,4-2.7V25.5H21a1.5,1.5,0,0,1,0-3h1.5V4.9l-4-2.7ZM9,13.5l2.8,1.9a1.5,1.5,0,0,1,.4,2.1,1.4,1.4,0,0,1-1.2.7,1.1,1.1,0,0,1-.8-.3L9,17.1Zm-5,9H7.5a1.5,1.5,0,0,1,0,3H4Zm5,8.4,1.2-.8a1.4,1.4,0,0,1,2,.4,1.5,1.5,0,0,1-.4,2.1L9,34.5ZM19.5,18.6l-4,4v2.8l4,4v5.2l-3.4,3.5a2.1,2.1,0,0,1-1.1.4,2.1,2.1,0,0,1-1.1-.4,1.6,1.6,0,0,1,0-2.2l2.6-2.5V30.6l-4-4V21.4l4-4V14.6l-2.6-2.5a1.6,1.6,0,1,1,2.2-2.2l3.4,3.5Z"
                  />
                  <path
                    d="M45.6,18.7l-4-3.3-.6-.5V7.5a1,1,0,0,0-.6-.9L30.5,2.1h-.4l-.6.2-4,2.7V22.5H27a1.5,1.5,0,0,1,0,3H25.5V43.1l4,2.7.6.2h.4l9.9-4.5a1,1,0,0,0,.6-.9V33.1l.6-.5,4-3.3a.9.9,0,0,0,.4-.8v-9A.8.8,0,0,0,45.6,18.7ZM39,17.1l-1.2.8a1.1,1.1,0,0,1-.8.3,1.4,1.4,0,0,1-1.2-.7,1.5,1.5,0,0,1,.4-2.1L39,13.5ZM28.5,29.4l4-4V22.6l-4-4V13.4l3.4-3.5a1.6,1.6,0,0,1,2.2,2.2l-2.6,2.5v2.8l4,4v5.2l-4,4v2.8l2.6,2.5a1.6,1.6,0,0,1,0,2.2,1.7,1.7,0,0,1-2.2,0l-3.4-3.5ZM39,34.5l-2.8-1.9a1.5,1.5,0,0,1-.4-2.1,1.4,1.4,0,0,1,2-.4l1.2.8Zm5-9H40.5a1.5,1.5,0,0,1,0-3H44Z"
                  />
                </g>
              </g>
            </g>
          </svg>

          <span class="text-[32px] font-bold">
            Искусственный интеллект "Vinny"
          </span>
        </div>

        <p class="text-gray-500">
          Примечание: Модель искусственного интеллекта пока учится, корректность
          ответа зависит от введенного вами запроса. Составляйте его с деталями,
          которые хотите получить.
        </p>
      </div>

      <div
        class="flex-col sm:flex-row flex gap-x-[20px] w-full justify-between"
      >
        <!-- image gen -->
        <div class="flex flex-col mt-[20px] gap-y-[20px]">
          <span class="text-[28px] font-bold">Генерация изображения</span>

          <div class="flex flex-col gap-y-[10px]">
            <contenteditable
              class="border-[1px] text-[16px] min-h-[43px] outline-none resize-none border-solid border-gray-600 rounded-[2px] px-[10px] py-[5px] w-[400px]"
              v-model="imagePrompt"
              tag="div"
            />

            <div class="flex gap-x-[10px]">
              <input
                type="checkbox"
                :disabled="isImagesLoading || isModerateStarted"
                id="contextCheckboxImage"
                v-model="needContextForImage"
              />

              <label for="contextCheckboxImage" class="cursor-pointer">
                Учитывать контекст текста поста
              </label>
            </div>

            <button
              v-if="imagePrompt.length"
              @click="generateAiImages"
              :disabled="isImagesLoading"
              class="cursor-pointer bg-green-300 rounded-[6px] py-[10px] px-[5px] text-center"
            >
              Сгенерировать изображения
            </button>
          </div>

          <div v-if="aiImagesList.length" class="text-[20px]">
            Результаты по запросу:
          </div>

          <div
            v-if="aiImagesList.length && !isImagesLoading"
            class="flex flex-wrap gap-x-[10px] gap-y-[10px]"
          >
            <div v-for="image in aiImagesList" :key="image" class="flex">
              <img
                :src="image"
                class="h-[300px] w-[300px] border-[1px] border-solid"
              />
            </div>
          </div>

          <div
            v-if="isImagesLoading"
            class="flex flex-wrap gap-x-[10px] gap-y-[10px]"
          >
            <LoadingImage v-for="i in 3" :key="i" />
          </div>
        </div>

        <!-- text gen -->
        <div class="flex flex-col mt-[20px] gap-y-[20px]">
          <span class="text-[28px] font-bold">Генерация текста</span>

          <div class="flex flex-col gap-y-[10px]">
            <contenteditable
              class="border-[1px] text-[16px] min-h-[43px] outline-none resize-none h-auto border-solid border-gray-600 rounded-[2px] px-[10px] py-[5px] w-[400px]"
              v-model="textPrompt"
              tag="div"
              placeholder="Например: дополни мой текст"
            />

            <div class="flex gap-x-[10px]">
              <input
                type="checkbox"
                id="contextCheckbox"
                :disabled="isTextLoading || isModerateStarted"
                v-model="needContext"
              />

              <label for="contextCheckbox" class="cursor-pointer">
                Учитывать контекст текста поста
              </label>
            </div>

            <button
              v-if="textPrompt.length"
              :disabled="isTextLoading || isModerateStarted"
              @click="generateAiText"
              class="cursor-pointer bg-green-300 rounded-[6px] py-[10px] px-[5px] text-center"
            >
              Сгенерировать текст
            </button>
          </div>

          <div v-if="aiImagesList.length" class="text-[20px]">
            Результат по запросу:
          </div>

          <div
            v-if="aiGeneratedText.length && !isTextLoading"
            class="flex flex-wrap gap-x-[10px] gap-y-[10px]"
          >
            <div
              class="flex border-[1px] border-solid border-gray-600 bg-white max-w-[400px] px-[5px] py-[10px] italic leading-[24px] rounded-[6px] w-full whitespace-pre-wrap max-h-[300px] overflow-y-auto"
            >
              {{ aiGeneratedText }}
            </div>
          </div>

          <div
            v-if="isTextLoading"
            class="flex flex-wrap gap-x-[10px] gap-y-[10px]"
          >
            <LoadingText />
          </div>
        </div>
      </div>

      <div>
        test text logic
        <input v-model="textForAnalyse" type="text" placeholder="okol" />
        <button @click="analysePost">анализировать</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia"
import Editor from "../common/Editor.vue"
import { usePostsStore } from "@/stores/postsStore"
import { useUserStore } from "@/stores/userStore"
import * as AiService from "@/services/aiService"
import contenteditable from "vue-contenteditable"
import LoadingImage from "@/components/common/LoadingImage.vue"
import LoadingText from "@/components/common/LoadingText.vue"

import * as AI_ANALYSES from "@/utils/aiAnalyseResponses"
import { ElMessage } from "element-plus"

export default {
  components: {
    Editor,
    contenteditable,
    LoadingImage,
    LoadingText
  },
  data() {
    return {
      isEdit: true,
      postData: {
        title: "",
        text: "",
        image: null
      },
      imagePrompt: "Кот на велосипеде. Стиль - ультра реализм",
      textPrompt: "",
      isImagesLoading: false,
      isTextLoading: false,
      aiImagesList: [],
      needContext: false,
      needContextForImage: false,
      aiGeneratedText: "",
      textForAnalyse: "",
      isModerateStarted: false
    }
  },
  computed: {
    ...mapStores(usePostsStore, useUserStore),
    currentUser() {
      return this.usersStore.currentUser
    }
  },
  methods: {
    saveText(text) {
      this.postData.text = text
      this.isEdit = false
    },
    async savePost() {
      this.startModerate()
      // this.$router.push("/posts")
    },
    async startModerate() {
      ElMessage({
        type: "info",
        message: "Сейчас Vinny проверит ваш пост, нужно немного подождать",
        showClose: true,
        duration: 1000
      })

      this.isModerateStarted = true

      console.log("text", this.postData.text)

      const analyseResult = await AiService.analyseText(this.postData.text)

      if (analyseResult === AI_ANALYSES.AI_OK) {
        await this.createPost()
        ElMessage({
          type: "success",
          message: "Ваш пост был опубликован, перенаправляю на главную...",
          showClose: true,
          duration: 3000
        })

        setTimeout(() => {
          this.$router.push("/posts")
        }, 3000)
      } else {
        ElMessage({
          type: "warning",
          message: `С вашим постом что-то не так.
          Такая ошибка возникает тогда,
          когда пост содержит негативный окрас,
          либо не содержит смысла.`
        })
        this.isModerateStarted = false
      }
    },
    async sussessModeration() {},
    async generateAiImages() {
      this.isImagesLoading = true

      let postContext = this.imagePrompt

      if (this.needContextForImage) {
        postContext =
          this.imagePrompt +
          "\nИзображение обязательно должно быть одно. Так же опирайся на этот текст, создавая изображение:" +
          this.imagePrompt
      }

      const imagePromises = [
        AiService.getAiImage(postContext),
        AiService.getAiImage(postContext),
        AiService.getAiImage(postContext)
      ]
      const promisesResults = await Promise.all(imagePromises)

      this.aiImagesList = promisesResults

      this.isImagesLoading = false
    },
    async generateAiText() {
      this.isTextLoading = true

      let postContext = this.textPrompt

      if (this.needContext) {
        postContext =
          this.textPrompt +
          "\nТак же опирайся на этот текст:" +
          this.postData.text
      }

      const textResponse = await AiService.getAiText(postContext)

      this.aiGeneratedText = textResponse
      this.isTextLoading = false
    },
    handleChangePostImage(event) {
      const file = event.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.postData.image = e.target.result
        }
        reader.readAsDataURL(file)
      }
    },
    async createPost() {
      const data = {
        content: this.postData.text,
        title: this.postData.title,
        creatorId: this.currentUser.id,
        cover: this.postData.image
      }
      await this.postsStore.createPost(
        data.content,
        data.title,
        data.creatorId,
        data.cover
      )
    }
  }
}
</script>
