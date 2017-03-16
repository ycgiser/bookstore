// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.config.productionTip = false
Vue.use(Vuex)
var store = new Vuex.Store({
		state: {
			ownBooks: [{
				title: '毒木圣经',
				book_id:'book1',
				img: require('./assets/book1.jpg')
			}, {
				title: '男性統治',
				book_id:'book2',
				img: require('./assets/book2.jpg')
			}, {
				title: '漫威宇宙',
				book_id:'book3',
				img: require('./assets/book3.jpg')
			}, {
				title: '道林格雷的画像',
				book_id:'book4',
				img: require('./assets/book4.jpg')
			}, {
				title: '职人志',
				book_id:'book5',
				img: require('./assets/book5.jpg')
			}, {
				title: '',
				img: require('./assets/plus.png')
			}],
			currentBook:{
				book_id:'book1',
				name:'毒木圣经',
				img: require('./assets/book1.jpg')
			},
			isReading:false
		},
		mutations: {
			changeCurrBook(state,book){
				state.currentBook=book
			},
			changeReadingState(state,isReading){
				state.isReading=isReading
			}
		}
	})
	/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {
		App
	}
})