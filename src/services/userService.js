import apiClient from "@/utils/axiosUtil"

export async function createUser(name, hash, email) {
  try {
    const response = await apiClient.post("create-user", {
      email: email,
      name: name,
      hash: hash
    })

    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function removeUser(userId) {
  try {
    const response = await apiClient.delete("remove-user", {
      params: {
        id: userId
      }
    })

    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function login(email, hash) {
  try {
    const response = await apiClient.post("login", {
      email: email,
      hash: hash
    })

    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function updateUser(avatar, email, hash, name) {
  try {
    const response = await apiClient.patch("update-user", {
      data: {
        avatar: avatar,
        email: email,
        hash: hash,
        name: name
      }
    })

    return response.data
  } catch (error) {
    return Promise.reject(error)
  }
}
