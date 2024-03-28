import httpInstace from "@/utils/http";

//加入
export const insertCartAPI = ({ skuId, count }) => {
  return httpInstace({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}

export const findNewCartListAPI = () => {
  return httpInstace({
    url: '/member/cart'
  })
}

export const delCartAPI = (ids) => {
  return httpInstace({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}

//合并购物车
export const mergeCartAPI = (data) => {
  return httpInstace({
    url: '/member/cart/merge',
    method: 'POST',
    data
  })
}