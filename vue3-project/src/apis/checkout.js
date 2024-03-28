
import httpInstace from "@/utils/http";


export const getCheckInfoAPI = () => {
  return httpInstace({
    url: '/member/order/pre',

  })
}

//创建订单
export const createOrderAPI = (data) => {
  return httpInstace({
    url: '/member/order',
    method: 'POST',
    data
  })
}