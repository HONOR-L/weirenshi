<template>
		<div>
				<el-table :data="tableData" style="width: 100%;" size="mini">
						<el-table-column type="selection" width="43"></el-table-column>
						<el-table-column prop="ztname" label="账套名称" width="120"></el-table-column>
						<el-table-column prop="salary" label="基本工资" width="70"></el-table-column>
						<el-table-column prop="help" label="交通补助" width="70"></el-table-column>
						<el-table-column prop="lunch" label="午餐补助" width="70"></el-table-column>
						<el-table-column prop="money" label="奖金" width="70"></el-table-column>
						<el-table-column prop="time" label="启用时间" width="100"></el-table-column>
						<el-table-column label="养老金">
								<el-table-column prop="exam" label="比率" width="70"></el-table-column>
								<el-table-column prop="basenum" label="基数" width="70"></el-table-column>
						</el-table-column>
						<el-table-column label="医疗保险">
								<el-table-column prop="exam" label="比率" width="70"></el-table-column>
								<el-table-column prop="basenum" label="基数" width="70"></el-table-column>
						</el-table-column>
						<el-table-column label="公积金">
								<el-table-column prop="exam" label="比率" width="70"></el-table-column>
								<el-table-column prop="basenum" label="基数" width="70"></el-table-column>
						</el-table-column>
						<el-table-column label="操作">
								<el-table-column prop="text" label="编辑" width="80">
										<el-button size="mini">编辑</el-button>
								</el-table-column>
								<el-table-column prop="del" label="删除" width="80">
										<el-button type="danger" @click="open" size="mini">删除</el-button>
								</el-table-column>
						</el-table-column>
				</el-table>
		</div>
</template>

<script>
	export default {
		methods: {
					open() {
					this.$confirm('删除[市场部工资账套]账套, 是否继续?', '提示', {
					  confirmButtonText: '确定',
					  cancelButtonText: '取消',
					  type: 'warning'
					}).then(() => {
					  this.$message({
						type: 'success',
						message: '删除成功!'
					  });
		 			})//.catch(() => {
		// 			  this.$message({
		// 				type: 'info',
		// 				message: '已取消删除'
		// 			  });          
		// 			});
				  }
				},
		data() {
			return {
				tableData: [{
					ztname: '市场部工资账套',
					salary: '9000',
					help: '500',
					lunch: '800',
					money: '4000',
					time: '2018-01-24',
					exam: '0.07',
					basenum: '2000',
					exam: '0.07',
					basenum: '2000',
					exam: '0.07',
					basenum: '2000',
				}, {
					ztname: '人事部工资账套',
					salary: '2000',
					help: '1000',
					lunch: '400',
					money: '2000',
					time: '2018-01-01',
					exam: '0.07',
					basenum: '2000',
					exam: '0.07',
					basenum: '2000',
					exam: '0.07',
					basenum: '2000'
				}, {
					ztname: '运维部工资账套',
					salary: '10000',
					help: '500',
					lunch: '800',
					money: '3000',
					time: '2018-01-25',
					exam: '0.07',
					basenum: '4000',
					exam: '0.07',
					basenum: '2000',
					exam: '0.07',
					basenum: '4000'
				}]
			}
		}
	}
</script>

<style scoped>
.el-table{
		font-size: 12px;
}
</style>
