import apiClient from "@/utils/axiosUtil"

export async function getAiImage(userContent) {
  try {
    console.log("image content", userContent)
    const resposne = await apiClient.post("ai", {
      generationType: "image",
      content: userContent
    })

    return resposne.data
  } catch (error) {
    console.log("error ai", error)
  }
}

export async function getAiText(userContent) {
  console.log("text content", userContent)
  try {
    const response = await apiClient.post("ai", {
      generationType: "text",
      content: userContent
    })

    return response.data
  } catch (error) {
    console.log("error ai text")
  }
}

export async function analyseText(userContent) {
  console.log("analyseText", userContent)

  try {
    const response = await apiClient.post("ai", {
      generationType: "analyse",
      content: userContent
    })

    return response.data
  } catch (error) {
    console.log("error ai text")
  }
}
