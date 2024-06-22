export function userLogin(email, hash) {
  localStorage.setItem("userEmail", email)
  localStorage.setItem("userHash", hash)
}

export function userLogout() {
  localStorage.removeItem("userEmail")
  localStorage.removeItem("userHash")
}

export function getEmailAndHash() {
  const data = {
    email: localStorage.getItem("userEmail"),
    hash: localStorage.getItem("userHash")
  }

  return data
}
