import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import router from './router/index'
//引入element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引入Pinia构造函数
import { createPinia } from 'pinia'
// 实例化 Pinia
const pinia = createPinia() 
const app = createApp(App);
app.use(ElementPlus).use(router).use(pinia).mount('#app')
//全局注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
//app.use(router).mount('#app') 多了这句话组件库就没法正常使用
