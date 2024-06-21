import * as usersService from "@/services/userService"
import * as Utils from "@/utils/userHandler"
import { defineStore } from "pinia"

export const useUserStore = defineStore("users", {
  state: {
    currentUser: null
  },
  actions: {
    async login(email, hash) {
      const authData = await usersService.login(email, hash)
      this.currentUser = authData
      this.loginLocally(authData)
    },
    async updateUser(avatar, email, hash, name) {
      const response = await usersService.updateUser(avatar, email, hash, name)
      this.currentUser = response
    },
    async removeUser(userId) {
      await usersService.removeUser(userId)
      this.logoutLocally()
      this.currentUser = null
    },
    loginLocally(data) {
      Utils.userLogin(data.email, data.hash)
    },
    logoutLocally() {
      Utils.userLogout()
    }
  }
})
