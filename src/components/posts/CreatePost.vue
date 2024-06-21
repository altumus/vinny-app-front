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
      <div
        v-html="postData.text"
        v-if="!isEdit"
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
        <el-button type="primary" @click="savePost" class="w-[200px]"
          >Создать публикацию</el-button
        >
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
      isEdit: true,
      postData: {
        title: "",
        text: "",
        image: null
      }
    }
  },
  computed: {},
  methods: {
    saveText(text) {
      this.postData.text = text
      this.isEdit = false
    },
    savePost() {
      alert("save post")
      const data = this.postData
      console.log(data)
      this.$router.push("/posts")
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
    }
  }
}
</script>
