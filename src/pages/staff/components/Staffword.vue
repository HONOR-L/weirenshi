<template>
	<el-table :data="tableData" border style="width: 100%;" size="mini">
		<el-table-column type="selection" width="50"></el-table-column>
		<el-table-column fixed prop="name" label="姓名" width="120"></el-table-column>
		<el-table-column prop="num" label="工号" width="120"></el-table-column>
		<el-table-column prop="email" label="电子邮件" width="200"></el-table-column>
		<el-table-column prop="phone" label="电话号码" width="120"></el-table-column>
		<el-table-column prop="dept" label="所属部门" width="120"></el-table-column>
		<el-table-column prop="salary" label="工资账套" width="195">
			<el-button type="primary" size="mini" plain>人事部工资账套</el-button>
		</el-table-column>
		<el-table-column fixed="right" label="操作" width="195">
			<el-button type="danger" size="mini">修改账套</el-button>
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
					name: '江南一点雨',
					num: '00000001',
					email: 'laowang@qq.com',
					phone: '18565558897',
					dept: '总办'
				}, {
					name: '陈静',
					num: '00000002',
					email: 'chenjing@qq.com',
					phone: '18795556693',
					dept: '财务部'
				}, {
					name: '赵琳浩',
					num: '00000003',
					email: 'zhao@qq.com',
					phone: '15698887795',
					dept: '技术部'
				}, {
					name: '鹿存亮',
					num: '00000004',
					email: 'zhao@qq.com',
					phone: '15612347795',
					dept: '运维部'
				}, {
					name: '姚森',
					num: '00000005',
					email: 'yaosen@qq.com',
					phone: '14785559936',
					dept: '运维部'
				}, {
					name: '云星',
					num: '00000006',
					email: 'yunxing@qq.com',
					phone: '15644442252',
					dept: '运维部'
				}, {
					name: '贾旭明',
					num: '00000007',
					email: 'jiaxuming@qq.com',
					phone: '15644441234',
					dept: '市场部'
				}, {
					name: '薛磊',
					num: '00000008',
					email: 'xuelei@qq.com',
					phone: '15648887741',
					dept: '运维部'
				}, {
					name: '张黎明',
					num: '00000009',
					email: 'zhangliming@qq.com',
					phone: '18979994478',
					dept: '技术部'
				}, {
					name: '张洁',
					num: '000000010',
					email: 'zhangjie@qq.com',
					phone: '13695557742',
					dept: '运维部'
				}, ]
			}
		}
	}
</script>

<style>

</style>
