import * as postsService from "@/services/postsService"
import { defineStore } from "pinia"

export const usePostsStore = defineStore("posts", {
  state: {
    posts: null
  },
  actions: {
    async createPost(content, title, creatorId, tagId) {
      const createdPost = await postsService.createPost(
        content,
        title,
        creatorId,
        tagId
      )
      this.addPostLocally(createdPost)
    },
    async deletePost(postId) {
      const deletedPost = await postsService.deletePost(postId)
      this.deletePostLocally(deletedPost)
    },
    async updatePost(postId, content, dislikes, likes, title) {
      const updatedPost = await postsService.updatePost(
        postId,
        content,
        dislikes,
        likes,
        title
      )
      this.updatePostLocally(updatedPost)
    },
    async getAllPosts() {
      const allPosts = await postsService.getAllPosts()
      this.posts = allPosts
    },
    async getPostsByTag(tagId) {
      const filteredPosts = await postsService.getPostsByTag(tagId)
      this.posts = filteredPosts
    },
    addPostLocally(data) {
      this.posts.push(data)
    },
    deletePostLocally(data) {
      const index = this.posts.findIndex((post) => post.id === data.id)

      if (index === -1) return

      this.posts.slice(index, 1)
    },
    updatePostLocally(data) {
      const postIndex = this.posts.findIndex((post) => post.id === data.id)

      if (postIndex === -1) return

      this.posts[postIndex] = {
        ...this.posts[postIndex],
        ...data
      }
    }
  }
})
