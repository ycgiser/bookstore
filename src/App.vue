<template>
  <div id="app">
    <transition name="fade">
    <book-header v-if="!showHeader" :class="channel=='Read'?'staticHeader':'unstaticHeader'"></book-header>
    </transition>
    <router-view></router-view>
  </div>
</template>

<script>
import bookHeader from './components/BookHeader'
export default {
  name: 'app',
  computed:{
    channel(){
      return this.$route.name
    },
    showHeader(){
      return this.$store.state.isReading
    }
  },
  components:{
    bookHeader
  }
}
</script>

<style>
html,body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
    margin:0;
    padding:0;
    display: block
 }
#app {
  font-family: 微软雅黑,'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  border: 1px solid #d3d3d3;
  height: 716px;
  width: 436px;
  position: relative;
}
@media screen and(min-width: 1366) {
  #app{
    height: 716px;
    width: 436px
  }
}
.staticHeader{
  position: absolute;
  background: #fff
}
.unstaticHeader{
  position: relative;
}
</style>
