import httpInstace from '@/utils/http'
//banner
export function getBannerAPI(params = {}) {
  const { distributionSite = '1' } = params
  return httpInstace({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstace({
    url: '/home/new'
  })
}


/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return httpInstace({
    url: '/home/hot'
  })

  // 'home/hot', {})
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return httpInstace({
    url: '/home/goods'
  })
}