import apiClient from "@/utils/axiosUtil"

export async function createTag(creatorId, color, title) {
  try {
    const response = await apiClient.post("create-tag", {
      data: {
        color: color,
        title: title,
        creatorId: creatorId
      }
    })

    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function removeTag(tagId) {
  try {
    const response = await apiClient.delete("remove-tag", {
      params: {
        tagId: tagId
      }
    })
    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function getAllTags() {
  try {
    const response = await apiClient.get("all-tags")
    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}
