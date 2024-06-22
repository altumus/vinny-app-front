<template>
  <section>
    <div
      class="flex flex-col items-center justify-start px-6 mt-[100px] mx-auto md:h-screen lg:py-0"
    >
      <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"
          >
            Регистрация
          </h1>
          <form
            @submit.prevent="handleSubmit"
            class="space-y-4 md:space-y-6"
            action="#"
          >
            <div>
              <label
                for="nick"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Отображаемое имя</label
              >
              <input
                v-model="formData.name"
                type="text"
                name="nick"
                id="nick"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Валентин1990"
                required
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Ваш Email</label
              >
              <input
                v-model="formData.email"
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Пароль</label
              >
              <input
                v-model="formData.password"
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label
                for="confirm-password"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Подтверждение пароля</label
              >
              <input
                v-model="formData.confirmPassword"
                type="confirm-password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
              />
            </div>
            <p class="text-red-500" v-if="error.length">{{ error }}</p>
            <button
              type="submit"
              class="w-full text-white bg-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Зарегистрироваться
            </button>
            <p class="text-sm font-light text-gray-500">
              Есть аккаунт?
              <router-link
                to="/login"
                class="font-medium text-primary-600 hover:underline"
                >Войти</router-link
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useUserStore } from "@/stores/userStore"
import { mapStores } from "pinia"

export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
        confirmPassword: "",
        name: ""
      },
      error: ""
    }
  },
  computed: {
    ...mapStores(useUserStore)
  },
  methods: {
    async handleSubmit() {
      if (this.formData.email.length && this.formData.password.length) {
        if (this.formData.password !== this.formData.confirmPassword) {
          this.error = "Пароли не совпадают"
          return
        }

        const data = {
          name: this.formData.name,
          email: this.formData.email,
          password: this.formData.password
        }
        await this.usersStore.register(data.name, data.email, data.password)
        this.$router.push("/account")
        this.error = ""
      }
    }
  }
}
</script>
