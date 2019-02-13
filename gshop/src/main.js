// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import {Button} from 'mint-ui'   //mint-ui组建
import 'mint-ui/lib/style.css'

import App from './App'
import router from './router'
import store from './store'

import VueLazyload from 'vue-lazyload'

import './mock/mockServer'
import loading from './common/imgs/loading.gif'
import './filters'      //自定义过滤器

Vue.component(Button.name, Button) //<mt-button>

Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
