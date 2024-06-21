import * as commentsService from "@/services/commentsService"
import { defineStore } from "pinia"

export const useCommentsStore = defineStore("comments", {
  state: {
    comments: null
  },
  actions: {
    async getAllComments(postId) {
      const allComments = await commentsService.getComments(postId)
      this.comments = allComments
    },
    async removeComment(commentId) {
      const removedComment = await commentsService.removeComment(commentId)
      this.deleteCommentLocally(removedComment.id)
    },
    async createComment(content, creatorId, postId) {
      const createdComment = await commentsService.createComment(
        content,
        creatorId,
        postId
      )

      this.addCommentLocally(createdComment)
    },
    deleteCommentLocally(commentId) {
      const index = this.comments.findIndex(
        (comment) => comment.id === commentId
      )

      if (index === -1) return

      this.comments.splice(index, 1)
    },
    addCommentLocally(comment) {
      this.comments.push(comment)
    }
  }
})
