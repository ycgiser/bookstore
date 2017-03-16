<template>
	<div class="book-banner">
		<div class="img-container" @click="changeCurrBook">
			<router-link v-if="rank==1" :to="'store'" class="link"></router-link>
			<router-link v-if="rank!=1" :to="{name:'Read',params:{id:book.book_id}}" class="link"></router-link>
			<img :class="type" :src="book.img">
		</div>
		<div class="title-container">
			<span>{{book.title}}</span>
		</div>
	</div>
</template>
<script>
	export default{
		props:['book','rank'],
		computed:{
    		type(){
    			var className="normal"
    			if(this.book.title=="") className="mini"
      			return className
    		}
  		},
		methods:{
			changeCurrBook(){
				this.$store.commit('changeCurrBook',this.book)
			}
		}
	}
</script>
<style>
	.book-banner{
		width: 120px;
		margin-bottom: 10px
	}
	.img-container{
		height: 170px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #ececec;
		position: relative;
	}
	.title-container{
		height: 40px;
	}
	.title-container span{
		line-height: 40px
	}
	.book-banner img.normal{
		height: 170px;
		width: 120px
	}
	.book-banner img.mini{
		height: 32px;
		width: 32px
	}
	.link{
		position: absolute;
		width: 100%;
		height: 100%
	}
</style>