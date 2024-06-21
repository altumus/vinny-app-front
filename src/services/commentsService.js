import apiClient from "@/utils/axiosUtil"

export async function createComment(content, creatorId, postId) {
  try {
    const response = await apiClient.post("create-comment", {
      content: content,
      creatorId: creatorId,
      postId: postId
    })

    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function getComments(postId) {
  try {
    const response = await apiClient.get("get-post-comments", {
      params: {
        postId: postId
      }
    })

    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function removeComment(commentId) {
  try {
    const response = await apiClient.delete("remove-comment", {
      params: {
        commentId: commentId
      }
    })

    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}
