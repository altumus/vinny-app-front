import * as postsService from "@/services/postsService"
import { defineStore } from "pinia"

export const usePostsStore = defineStore("posts", {
  state: () => ({
    posts: [],
    currentPost: null
  }),
  actions: {
    async createPost(content, title, creatorId, cover) {
      const createdPost = await postsService.createPost(
        content,
        title,
        creatorId,
        cover
      )
      this.addPostLocally(createdPost)
    },
    async deletePost(postId) {
      const deletedPost = await postsService.deletePost(postId)
      this.deletePostLocally(deletedPost)
    },
    async updatePost(postId, content, dislikes, likes, title, cover) {
      const updatedPost = await postsService.updatePost(
        postId,
        content,
        dislikes,
        likes,
        title,
        cover
      )

      console.log(updatedPost)
      this.currentPost = updatedPost
    },
    async getMyPosts(creatorId) {
      const myPosts = await postsService.getMyPosts(creatorId)
      this.posts = myPosts
    },
    async getAllPosts() {
      const allPosts = await postsService.getAllPosts()
      this.posts = allPosts
    },
    async getPostById(postId) {
      const post = await postsService.getPostById(postId)
      console.log("post is", post)
      this.currentPost = post
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

      this.posts.splice(index, 1)
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
