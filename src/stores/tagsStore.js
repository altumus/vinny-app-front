import * as tagsService from "@/services/tagsService"
import { defineStore } from "pinia"

export const useTagsStore = defineStore("tags", {
  state: {
    tags: null
  },
  actions: {
    async getAllTags() {
      const tags = await tagsService.getAllTags()
      this.tags = tags
    },
    async removeTag(tagId) {
      const removedTag = await tagsService.removeTag(tagId)
      this.removeTagLocally(removedTag.id)
    },
    async createTag(creatorId, color, title) {
      const createdTag = await tagsService.createTag(creatorId, color, title)
      this.addTagLocally(createdTag)
    },
    addTagLocally(tag) {
      this.tags.push(tag)
    },
    removeTagLocally(tagId) {
      const index = this.tags.findIndex((tag) => tag.id === tagId)

      if (index === -1) return

      this.tags.splice(index, 1)
    }
  }
})
