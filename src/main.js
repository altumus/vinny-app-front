import CKEditor from "@ckeditor/ckeditor5-vue"
import * as mdijs from "@mdi/js"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import mdiVue from "mdi-vue/v3"
import { createPinia } from "pinia"
import { createApp } from "vue"
import App from "./App.vue"
import "./main.css"
import router from "./router"
import "./style.css"

createApp(App)
  .use(createPinia())
  .use(router)
  .use(ElementPlus)
  .use(CKEditor)
  .use(mdiVue, {
    icons: mdijs
  })
  .mount("#app")
