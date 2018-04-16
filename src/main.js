import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
// import VConsole from 'vconsole'

/* eslint-disable no-unused-vars */
// const vConsole = new VConsole()

console.log('test')

fastclick.attach(document.body)

Vue.use(VueLazyLoad, {
	loading: require('common/image/default.png')
})

// Vue.config.productionTip = false

import 'common/stylus/index.styl'

/* eslint-disable no-new */
new Vue({
	el: '#app',
	render: h => h(App),
	store,
	router
})
