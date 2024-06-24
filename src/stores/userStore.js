import * as usersService from "@/services/userService"
import * as Utils from "@/utils/userHandler"
import { defineStore } from "pinia"

export const useUserStore = defineStore("users", {
  state: () => ({
    currentUser: null
  }),
  actions: {
    async login(email, hash) {
      const authData = await usersService.login(email, hash)
      this.currentUser = authData
      console.log("auth data", authData)
      this.loginLocally(authData)
    },
    async register(name, email, password) {
      const newUser = await usersService.createUser(name, password, email)
      console.log("new user", newUser)
      this.currentUser = newUser
      this.setCurrentUser(newUser)
    },
    async updateUser(id, avatar, email, hash, name) {
      const response = await usersService.updateUser(
        id,
        avatar,
        email,
        hash,
        name
      )
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
    setCurrentUser(data) {
      Utils.userLogin(data.email, data.hash)
    },
    logoutLocally() {
      this.currentUser = null
      Utils.userLogout()
    }
  }
})
