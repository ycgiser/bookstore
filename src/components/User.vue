<template>
  <div class="user-box">
    <div class="login-panel">
    	<div class="login-icon">
    		<img src="../assets/user.png">
    	</div>	
    	<div class="login-msg">
    		<Strong>未登录</Strong>
    		<p>一键同步相关信息</p>
    	</div>
    </div>
    <div class="account-panel">
    	<span>我的账户</span>
    	<img src="../assets/forward.png" class="right-icon">
    </div>
    <div class="attach-panel">
    	<div class="comment-panel">
    		<span>我的书评</span>
    		<img src="../assets/forward.png" class="right-icon">
    	</div>
    	<div class="idea-panel">
    		<span>划线和想法</span>
    		<img src="../assets/forward.png" class="right-icon">
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-box{
	width: 100%
}
.user-box>div{
	width: 100%;
	box-shadow: 0 0px 1px 1px #ddd;

}
.login-panel{
	height: 80px;
}
.login-panel .login-icon{
	width: 48px;
	float: left;
    margin-left: 15px;
}
.login-icon img{
	width: 48px;
	height: 48px;	
	margin: 16px auto;
}
.login-panel .login-msg{
	float: left;
	margin: 20px 12px;
	text-align: left
}
.login-msg p{
	font-size: 14px
}
.account-panel{
	height: 46px;
	margin-top: 15px
}
.attach-panel{
	height: 93px;
	margin-top: 30px
}
.comment-panel{
	height: 46px;
	margin-left: 15px;
	border-bottom: 1px solid #ddd
}
.right-icon{
	height: 24px;
	width: 24px;
	float: right;
	right: 15px;
	margin:10px;
}
.account-panel span,.idea-panel span{
	margin-top: 12px;
    display: inline-block;
    float: left;
    margin-left: 15px
}
.comment-panel span{
	margin-top: 12px;
    display: inline-block;
    float: left;
    margin-left: 0
}

</style>
