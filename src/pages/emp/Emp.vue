<template>
	<div>
		<div>
			<div>
				<el-header class="logo">微人事</el-header>
				<el-header style="text-align: right; font-size: 12px">
					<span class="el-icon-bell bell"></span>
					<el-dropdown class="manager">
						<span style="margin-right: 15px; cursor: pointer;">
							系统管理员
							<img src="../../assets/image/64573ce2edc0728.jpg" alt="">
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>个人中心</el-dropdown-item>
							<el-dropdown-item>设置</el-dropdown-item>
							<el-dropdown-item>注销</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</el-header>
			</div>
			<el-container style="min-height: 605px; border: 1px solid #eee">
				<el-aside width="200px" style="background-color: #ececec;">
					<el-menu :default-openeds="['1']">
						<el-submenu index="1" style="background: #ececec;">
							<template slot="title"><i class="el-icon-user-solid" style="color: rgb(32, 160, 255);"></i>员工资料</template>
							<el-menu-item-group>
								<el-menu-item index="1-1">
									基本资料
								</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="2" style="background: #ececec;">
							<template slot="title"><i class="el-icon-postcard" style="color: rgb(32, 160, 255);"></i>人事管理</template>
							<el-menu-item-group>
								<el-menu-item index="2-1">员工奖惩</el-menu-item>
								<el-menu-item index="2-2">员工培训</el-menu-item>
								<el-menu-item index="2-3">员工调薪</el-menu-item>
								<el-menu-item index="2-4">员工调动</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="3" style="background: #ececec;">
							<template slot="title"><i class="el-icon-s-marketing" style="color: rgb(32, 160, 255);"></i>薪资管理</template>
							<el-menu-item-group>
								<el-menu-item index="3-1">
									<router-link to="/salary" tag="li">工资套账管理</router-link>
								</el-menu-item>
								<el-menu-item index="3-2">
									<router-link to="/staff" tag="li">员工套账设置</router-link>
								</el-menu-item>
								<el-menu-item index="3-3">工资表管理</el-menu-item>
								<el-menu-item index="3-4">月末处理</el-menu-item>
								<el-menu-item index="3-5">工资表查询</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="4" style="background: #ececec;">
							<template slot="title"><i class="el-icon-s-data" style="color: rgb(32, 160, 255);"></i>统计管理</template>
							<el-menu-item-group>
								<el-menu-item index="4-1">综合信息统计</el-menu-item>
								<el-menu-item index="4-2">员工积分统计</el-menu-item>
								<el-menu-item index="4-3">人事信息统计</el-menu-item>
								<el-menu-item index="4-4">人事记录统计</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="5" style="background: #ececec;">
							<template slot="title"><i class="el-icon-menu" style="color: rgb(32, 160, 255);"></i>系统管理</template>
							<el-menu-item-group>
								<el-menu-item index="5-1">基本信息先设置</el-menu-item>
								<el-menu-item index="5-2">系统管理</el-menu-item>
								<el-menu-item index="5-3">操作日志设置</el-menu-item>
								<el-menu-item index="5-4">操作员管理</el-menu-item>
								<el-menu-item index="5-5">备份恢复数据库</el-menu-item>
								<el-menu-item index="5-6">初始化数据库</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
					</el-menu>
				</el-aside>
				<el-main>
					<el-breadcrumb separator-class="el-icon-arrow-right">
					  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
					  <el-breadcrumb-item>基本资料</el-breadcrumb-item>
					</el-breadcrumb>
					<div class="function">
						<div class="search">
							<el-input placeholder="通过员工名搜索员工,记得回车哦..." size="mini" prefix-icon="el-icon-search" v-model="input"></el-input>
							<el-button type="primary" icon="el-icon-search" size="mini">搜索</el-button>
						</div>
						<div class="data">
							<el-button type="success" icon="el-icon-sort-up" size="mini">导入数据</el-button>
							<el-button type="success" icon="el-icon-sort-down" size="mini">导出数据</el-button>
							<el-button type="primary" icon="el-icon-plus" size="mini">添加员工</el-button>
						</div>
					</div>
					<emp-word></emp-word>
					<div class="page">
						<div class="page_left"><el-button type="danger" size="small" disabled>批量删除</el-button></div>
						<div class="page_right">
							<el-pagination background layout="prev, pager, next" :total="200"></el-pagination>
						</div>
					</div>
				</el-main>
			</el-container>
		</div>
	</div>
</template>

<script>
import EmpWord from './components/Word'
export default {
	data() {
		const item = {
			date: '2016-05-02',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1518 弄'
		};
		return {
			// tableData: Array(20).fill(item),
			input:''
		}
	},
	components: {
		EmpWord,
	}
};
</script>


<style>
body{
	margin: 0;
}
.el-header {
	background-color: #20a0ff;
	color: #333;
	line-height: 60px;
}
.logo{
	float: left;
	color: #fff;
	font-size: 22px;
}
.bell{
	margin-right: 10px;
	font-size: 18px;
	cursor: pointer;
}
.manager span{
	color: #fff;
}
.manager span img{
	width: 40px;
	height: 40px;
	border-radius: 50%;
	vertical-align: middle;
	cursor: pointer;
	margin-left: 5px;
}
.btn_color{
	color: rgb(32, 160, 255);
}

.el-aside {
	color: #333;
}
.el-table{
	margin-top: 20px;
}
.el-menu-item-group__title{
	padding: 0;
}
.el-breadcrumb{
	margin-bottom: 20px;
}
.el-input{
	width: 300px;
}
.el-input__inner{
	width: 300px;
	height: 28px;
}
.el-input__icon{
	line-height: 30px;
}
.el-button--mini {
    padding: 6px 15px;
}
.function{
	display: flex;
	justify-content: space-between;
	height: 30px;
	line-height: 30px;
}
.function .data el-button{
	padding: 6px 15px;
} 
.page{
	display: flex;
	justify-content: space-between;
}
.page_left{
	line-height: 30px;
}

</style>
