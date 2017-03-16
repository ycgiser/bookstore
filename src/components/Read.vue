<template>
  <div class="reader">
  	<div class="reader-container" @click="changeReadingState">
  		<p>{{chapter}}</p>
  	</div>
  	<transition name="fade-bottom">
  		<read-tools v-show="!showTools"></read-tools>
  	</transition>
  </div>
</template>

<script>
import axios from 'axios';
import data from '../data/book1.json'
import readTools from './ReadTools'
export default {
  name: 'read',
  data () {
    return {
      chapter: ''
    }
  },
  computed:{
    showTools(){
      return this.$store.state.isReading
    }
  },
  created(){
  	var book_id=this.$route.params.id
  	// axios.get('http://loaclhost:8090/bookservice/getBook?id='+book_id).then(function(data){
  	// 	chapter=data.chapters;
  	// })
  	this.chapter=data.chapters['1']
  	this.$store.commit('changeReadingState',false)

  },
  methods:{
  	changeReadingState(){
  		this.$store.commit('changeReadingState',!this.$store.state.isReading)
  	}
  },
  components:{readTools}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reader{
	overflow-y: auto;
    height: 716px;
}
.reader-container{
	margin: 15px 15px;
	font-size: 14px;
	text-align: left;
}
</style>
