import apiClient from "@/utils/axiosUtil"

export async function createPost(content, title, creatorId, tagId) {
  try {
    const response = await apiClient.post("create-post", {
      data: {
        content: content,
        title: title,
        creatorId: creatorId,
        tagId: tagId
      }
    })

    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function deletePost(postId) {
  try {
    const response = await apiClient.delete("delete-post", {
      params: {
        id: postId
      }
    })

    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function updatePost(postId, content, dislikes, likes, title) {
  try {
    const response = await apiClient.patch("update-post", {
      data: {
        id: postId,
        content: content,
        dislikes: dislikes,
        likes: likes,
        title: title
      }
    })

    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function getAllPosts() {
  try {
    const response = await apiClient.get("all-posts")
    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function getPostsByTag(tagId) {
  try {
    const response = await apiClient.get("posts-by-tag", {
      params: {
        tagId: tagId
      }
    })
    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}
