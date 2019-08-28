import Vue from 'vue'
import App from './App'

import './common/scss/common.scss'
import VHeader from './components/header/index'
import VTab from './components/tab/index'

Vue.component('VHeader', VHeader)
Vue.component('VTab', VTab)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
