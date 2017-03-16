<template>
	<div class="read-tool">
		<div class="read-tool-container">
			<div class="chapter-tool">
				<span>上一章</span>
				<input type="range" name="points" min="1" max="10" class="inline-control chapter-selector"/>
				<span>下一章</span>
			</div>
			<div class="detail-tool">
				<div class="icon-tool" @click="showCatelog">
					<img src="../assets/catelog.png" alt="">
					<p>目录</p>
				</div>
				<div class="icon-tool" @click="download">
					<img src="../assets/download.png" alt="">
					<p>缓存</p>
				</div>
				<div class="icon-tool" @click="lightOff">
					<img src="../assets/night.png" alt="">
					<p>夜间</p>
				</div>
				<div class="icon-tool" @click="setFont">
					<img src="../assets/font.png" alt="">
					<p>字体</p>
				</div>
				<div class="icon-tool" @click="openWindow">
					<img src="../assets/window.png" alt="">
					<p>窗口</p>
				</div>
			</div>
		</div>
		
	</div>
</template>
<script>
	export default{
		name:'readTools',
		methods:{
			showCatelog(){
				
			},
			download(){
				
			},
			lightOff(){

			},
			setFont(){

			},
			openWindow(){
				
			}
		}
	}
</script>
<style>
	.read-tool{
		height: 130px;
		width: 100%;
		position: absolute;
		background: #fff;
		bottom: 0
	}
	.chapter-tool{
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.chapter-selector{
		width: 250px
	}
	input[type="range"] {
		height:1px;
    }
	.inline-control{
		display: inline-block;
	}
	.read-tool-container{
		margin:15px
	}
	.detail-tool{
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin-top: 25px;
		cursor: pointer;
	}
	.icon-tool{
		width: 85px;
		height: 73px;
	}
	.fade-bottom-enter-active{
		transform-origin:0 100%;
  		animation: bounce-in .5s;
	}
	.fade-bottom-leave-active {
		transform-origin:0 100%;
  		animation: bounce-out .5s;
	}
	@keyframes bounce-in{
  		0% {
    		transform: scaleY(0);
  		}
  		100%{
    		transform: scaleY(1);
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