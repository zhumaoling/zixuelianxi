import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import jQuery from 'jquery'


import App from './App.vue'
import router from './router'
import { lazyPlugin } from './directives'
import { componentPlugin } from '@/components/index'



//测试接口函数
import { getCategory } from './apis/tesrAPI'
getCategory().then(res => {
  console.log(res);
})

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(jQuery)
app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')


