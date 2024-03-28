import httpInstace from "@/utils/http";

export const getOrderAPI = (id) => {
  return httpInstace({
    url: `/member/order/${id}`
  })
}