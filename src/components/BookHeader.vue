<template>
	<div class="book-header" ref="header">
		<div class="center-box header-container">
			<div class="user-icon" @click="goUser">
				<img v-if="title=='一点'" src="../assets/user.png">
			</div>
			<div class="back-panel" v-if="title!='一点'" @click="goBack">
				<img src="../assets/back.png">
				<span>返回</span>
			</div>	
			<div class="title">
				<span>{{title}}</span>
			</div>
			<div class="store-icon" @click="goStore">
				<span  v-if="title=='一点'">商城</span>
			</div>
		</div>
		
	</div>
</template>
<script>
	export default{
		computed:{
			title(){
				var name='一点'
				switch(this.$route.name){
					case 'Home':
						name='一点'
						break
					case 'User':
						name='个人中心'
						break
					case 'Store':
						name='商城'
						break
					case 'Read':
						name=this.$store.state.currentBook.title
						break
				}
				return name
			}
		},
		methods:{
			goBack(){
				window.history.go(-1)
			},
			goUser(){
				this.$router.push('/user')
			},
			goStore(){
				this.$router.push('/store')
			}
		}
	}
</script>
<style>
	.book-header{
		width: 100%;
		height: 40px;
		border-bottom: 1px solid #ddd;
	}
	.center-box{
		width: 98%;
		height: 100%;
		margin: 0 auto;
	}
	.header-container{
		display: flex;
		align-items: center;
	}
	.book-header .user-icon{
		flex: 1;
	}
	.user-icon img{
		height: 28px;
		width: 28px;
		float: left
	}
	.book-header .title{
		flex: 8;
		font-weight:700;
		font-size: 20px 
	}
	.book-header .store-icon{
		flex: 1;
		font-weight:400;
		font-size: 16px;
		text-align: right;
	}
	.store-icon span{
    	right: 0px;
    	line-height: 28px;
	}
	.back-panel{
		position: absolute;
		height: 26px;
		display: flex;
		cursor: pointer;
	}
	.back-panel img{
		height: 28px;
		width: 28px;
	}
	.back-panel span{
		line-height: 26px;
    	vertical-align: middle;
    	margin-left: -4px
	}
	.fade-enter-active{
  		animation: bounce-in .5s;
	}
	.fade-leave-active {
		transform-origin:0 0;
  		animation: bounce-out .5s;
	}
	@keyframes bounce-in{
  		0% {
    		height:0;
  		}
  		100%{
    		height: 40px;
  		}
	}
	@keyframes bounce-out{
  		0% {
    		transform: scaleY(1);
  		}
  		100%{
    		transform: scaleY(0);
  		}
	}
</style>