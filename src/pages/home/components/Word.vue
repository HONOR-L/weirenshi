<template>
	<el-table :data="tableData" border style="width: 100%">
		<el-table-column type="selection" width="55"></el-table-column>
		<el-table-column fixed prop="name" label="姓名" width="100">
		</el-table-column>
		<el-table-column prop="num" label="工号" width="100">
		</el-table-column>
		<el-table-column prop="sex" label="性别" width="60">
		</el-table-column>
		<el-table-column prop="birthday" label="出生日期" width="120">
		</el-table-column>
		<el-table-column prop="ID-card" label="身份证号码" width="160">
		</el-table-column>
		<el-table-column prop="merry" label="婚姻状况" width="80">
		</el-table-column>
		<el-table-column prop="nation" label="民族" width="80">
		</el-table-column>
		<el-table-column prop="province" label="籍贯" width="100">
		</el-table-column>
		<el-table-column prop="zzmm" label="政治面貌" width="120">
		</el-table-column>
		<el-table-column prop="email" label="电子邮件" width="160">
		</el-table-column>
		<el-table-column prop="address" label="联系地址" width="300">
		</el-table-column>
		<el-table-column prop="bumen" label="所属部门" width="120">
		</el-table-column>
		<el-table-column prop="post" label="职位" width="100">
		</el-table-column>
		<el-table-column prop="postname" label="职称" width="100">
		</el-table-column>
		<el-table-column prop="style" label="聘用形式" width="120">
		</el-table-column>
		<el-table-column prop="RZdate" label="入职日期" width="120">
		</el-table-column>
		<el-table-column prop="ZZdate" label="转正日期" width="120">
		</el-table-column>
		<el-table-column prop="QSdate" label="合同起始日期" width="120">
		</el-table-column>
		<el-table-column prop="JZdate" label="合同截至日期" width="120">
		</el-table-column>
		<el-table-column prop="HTdate" label="合同期限" width="120">
		</el-table-column>
		<el-table-column prop="high" label="最高学历" width="120">
		</el-table-column>
		<el-table-column fixed="right" label="操作" width="220">
			<template slot-scope="scope">
				<el-button type="text" size="small">编辑</el-button>
				<el-button @click="handleClick(scope.row)" type="text" size="small">查看高级资料</el-button>
				<el-button type="delete" size="small">删除</el-button>
			</template>
		</el-table-column>
	</el-table>
</template>

<script>
	export default {
		methods: {
			handleClick(row) {
				console.log(row);
			}
		},

		data() {
			return {
				tableData: [{
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333
				}, {
					date: '2016-05-04',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1517 弄',
					zip: 200333
				}, {
					date: '2016-05-01',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1519 弄',
					zip: 200333
				}, {
					date: '2016-05-03',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1516 弄',
					zip: 200333
				}]
			}
		}
	}
</script>
<style>

</style>
