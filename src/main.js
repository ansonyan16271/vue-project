import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss' //引入scss


Vue.use(ElementUI);


Vue.config.productionTip = false

//全局组件定义
// Vue.component('myHello',{render(){return <h1>hello 111</h1>}});
import './components/global/'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
