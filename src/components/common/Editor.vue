<template>
  <div>
    <ckeditor
      :editor="editor"
      v-model="editorText"
      :config="editorConfig"
    ></ckeditor>
  </div>
  <el-button @click="save" type="success" class="w-[200px]"
    >Завершить редактирование
  </el-button>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"

export default {
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  emits: ["save"],
  mounted() {
    this.editorText = this.text
  },
  data() {
    return {
      editor: ClassicEditor,
      editorText: "<p>Content of the editor.</p>",
      editorConfig: {
        // The configuration of the editor.
      }
    }
  },
  methods: {
    save() {
      this.$emit("save", this.editorText)
    }
  }
}
</script>
