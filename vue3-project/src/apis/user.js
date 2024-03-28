import httpInstace from "@/utils/http"

export const loginAPI = ({ account, password }) => {
  return httpInstace({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password,

    }
  })
}