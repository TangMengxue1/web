import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css'
import Header from './components/head.vue'
import naive from 'naive-ui'
import AppFooter from "./components/footer.vue"

// 导入axios
import axios from 'axios'
// 默认请求的基础url（如果axios请求的地址不带域名，自动添加baseURL）（默认请求域名，/当前域名）
axios.defaults.baseURL = "/"
// 设置post请求头的content-Type值
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 请求超时5000毫秒
axios.defaults.timeout = 5000;


const app=createApp(App)
app.component('Header',Header)
app.component('AppFooter',AppFooter)
app.config.globalProperties.$axios = axios
app.config.productionTip = false
app.use(Layui)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(naive)
app.mount('#app')


