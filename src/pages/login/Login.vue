<template>
	<div class="main">
		<form method="">
			<h3>系统登录</h3>
			<input type="text" value="" id="username" v-model="username" />
			<input type="password" value="" id="password" v-model="userpassword" />
			<el-checkbox v-model="checked">备选项</el-checkbox>
			<el-row>
			  <el-button type="primary" @click="btn">登录</el-button>
			</el-row>
		</form>
	</div>
</template>

<script>
	export default { 
		data() {
			return {
				 checked: true,
				 username:"",
				 userpassword:""
			};
		},
		methods:{
			btn() {
			const zh = this.username;
			const mm = this.userpassword;
				if(zh == "" || mm == ""){
					alert("请输入用户名或密码");
				}else{
					this.$router.push("/home");
				}
				
			}
		}
	}
</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
}
.main{
	width: 420px;
	margin: 0 auto;
}
form{
	padding: 35px 35px 15px;
	border:1px solid #eaeaea;
	background: #fff;
	border-radius: 15px;
	box-shadow: 0 0 25px #cac6c6;
	margin-top: 130px;
}
form h3{
	text-align: center;
}
form #username{
	width: 320px;
	height: 40px;
	padding: 0 15px;
	border-radius: 4px;
	border: 1px solid #dcdfe6;
	outline: none;
	margin-top: 42px;
	margin-bottom: 22px;
}
form #password{
	width: 320px;
	height: 40px;
	padding: 0 15px;
	border-radius: 4px;
	border: 1px solid #dcdfe6;
	outline: none;
	margin-bottom: 24px;
}
form #username:hover,#password:hover{
	border-color:#c0c4cc;
}
.el-checkbox{
	margin-left: 140px;
}
.el-button{
	width: 350px;
	margin-top: 39px;
	padding: 10px 0;
}

</style>
