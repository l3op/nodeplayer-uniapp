import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
NodePlayer.load(function(){
	const app = new Vue({
	    ...App
	})
	app.$mount()
})

