<template>
    <div class="center-box">
      <div class="search-box">
        <img src="../assets/search.png">
        <input type="text">
      </div>
      <div class="ownbook-panel">
        <book-banner v-for="(book,index) in ownbooks" :key="index" :rank="index/(ownbooks.length-1)" :book="book"></book-banner>
      </div>
    </div>
</template>

<script>
import bookBanner from './BookBanner'
export default {
  name: 'home',
  computed:{
    ownbooks(){
      return this.$store.state.ownBooks
    }
  },
  components:{
    bookBanner
  }
}
</script>
<style>
  .search-box{
    width: 100%;
    height: 30px;
    position: relative;
    display: flex;
    align-items: center;
    margin: 2px
  }
  .search-box img{
    position:absolute;
    width: 20px;
    left: 2px;
  }
  .search-box input{
    width: 100%;
    height: 100%;
    padding: 0 24px;
    font-size: 20px;
    margin-left: -2px
  }
  .ownbook-panel{
    margin: 10px 5px;
    display: flex;
    -webkit-flex-wrap:wrap;
    -webkit-justify-content: space-between;
  }
</style>
