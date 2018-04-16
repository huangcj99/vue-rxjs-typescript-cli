import 'assets/css/reset.css'
import './test.scss'
import '../../libs/class-component-hooks.js'
import Vue from 'vue'
import * as VueRx from 'vue-rx'
import * as Rx from 'rxjs/Rx'
import App from './test.vue'

Vue.use(VueRx, Rx)

/* eslint no-new: "off" */
new Vue({
  el: '#app',
  render: h => h(App)
})
