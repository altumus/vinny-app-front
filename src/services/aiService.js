import apiClient from "@/utils/axiosUtil"

export async function getAiImage(userContent) {
  try {
    console.log("content", userContent)
    const resposne = await apiClient.post("ai", {
      generationType: "image",
      content: userContent
    })

    return resposne.data
  } catch (error) {
    console.log("error ai", error)
  }
}
