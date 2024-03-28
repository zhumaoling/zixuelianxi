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


export const getLikeListAPI = ({ limit = 4 }) => {
  return httpInstace({
    url: '/goods/relevant',
    params: {
      limit
    }
  })
}