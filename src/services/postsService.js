import apiClient from "@/utils/axiosUtil"

export async function createPost(content, title, creatorId, cover) {
  try {
    console.log("content", content, "title", title, "creator", creatorId)
    const response = await apiClient.post("create-post", {
      content: content,
      title: title,
      creatorId: creatorId,
      cover: cover
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

export async function updatePost(
  postId,
  content,
  dislikes,
  likes,
  title,
  cover
) {
  try {
    const response = await apiClient.patch("update-post", {
      id: postId,
      content: content,
      dislikes: dislikes,
      likes: likes,
      title: title,
      cover: cover
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

export async function getPostById(postId) {
  try {
    const response = await apiClient.get("post-by-id", {
      params: {
        postId: postId
      }
    })
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
