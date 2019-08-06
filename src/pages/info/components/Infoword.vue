<template>
	<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
		<el-tab-pane label="部门管理" name="first">
			<el-input placeholder="输入部门名称搜索部门..." prefix-icon="el-icon-search" v-model="input1"></el-input>
			<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
		</el-tab-pane>
		<el-tab-pane label="职位管理" name="second">
			<el-input placeholder="添加职位..." v-model="input2">
				<i slot="prefix" class="el-input__icon el-icon-plus"></i>
			</el-input>
			<el-button type="primary" icon="el-icon-plus" size="mini">添加</el-button>
			<el-table :data="tableData" border style="width: 903px" size="mini">
				<el-table-column type="selection" width="55">
				</el-table-column>
				<el-table-column prop="num" label="编号" width="80">
				</el-table-column>
				<el-table-column prop="name" label="职位姓名" width="180">
				</el-table-column>
				<el-table-column prop="date" label="创建时间" width="180">
				</el-table-column>
				<el-table-column prop="do" label="操作" width="407">
					<el-button size="mini">编辑</el-button>
					<el-button type="danger" size="mini">删除</el-button>
				</el-table-column>
			</el-table>
			<el-button type="danger" disabled size="mini" style="margin-top: 10px;">批量删除</el-button>
		</el-tab-pane>
		<el-tab-pane label="职称管理" name="third">
			<el-input placeholder="添加职位..." v-model="input2">
				<i slot="prefix" class="el-input__icon el-icon-plus"></i>
			</el-input>
			<el-select v-model="value" placeholder="职称等级">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
			<el-button type="primary" icon="el-icon-plus" size="mini">添加</el-button>
			<el-table :data="tableData1" border style="width: 903px" size="mini">
				<el-table-column type="selection" width="55">
				</el-table-column>
				<el-table-column prop="num1" label="编号" width="80">
				</el-table-column>
				<el-table-column prop="name1" label="职称名称" width="180">
				</el-table-column>
				<el-table-column prop="elval" label="职称级别" width="180">
				</el-table-column>
				<el-table-column prop="createdate" label="创建时间" width="180">
				</el-table-column>
				<el-table-column prop="do1" label="操作" width="226">
					<el-button size="mini">编辑</el-button>
					<el-button type="danger" size="mini">删除</el-button>
				</el-table-column>
			</el-table>
			<el-button type="danger" disabled size="mini" style="margin-top: 10px;">批量删除</el-button>
		</el-tab-pane>
		<el-tab-pane label="奖惩规则" name="fourth" style="text-align: center; font-weight: bold; margin-top: 38px;">奖惩规则</el-tab-pane>
		<el-tab-pane label="权限组" name="fifth">
			<el-input placeholder="请输入角色英文名称..." v-model="input3">
				<template slot="prepend">ROLE_</template>
			</el-input>
			<el-input v-model="input4" placeholder="请输入角色中文名称"></el-input>
			<el-button type="primary" size="mini" icon="el-icon-plus">添加角色</el-button>
			
		</el-tab-pane>
	</el-tabs>
</template>
<script>
	export default {
		data() {
			return {
				activeName: 'first',
				input1: '',
				input2: '',
				input3: '',
				input4: '',
				data: [{
					label: '股东会',
					children: [{
						label: '董事会',
						children: [{
							label: '总办',
							children: [{
								label: '财务部'
							}, {
								label: '市场部',
								children: [{
									label: '华北市场部',
									children: [{
										label: '石家庄场部'
									}]
								}, {
									label: '华南市场部'
								}, {
									label: '西北市场部',
									children: [{
										label: '西安市场',
										children: [{
											label: '莲湖区市场'
										}]
									}]
								}]
							}, {
								label: '技术部'
							}, {
								label: '运维部'
							}]
						}]
					}],
				}, ],
				options: [{
					value: '选项1',
					label: '正高级'
				}, {
					value: '选项2',
					label: '副高级'
				}, {
					value: '选项3',
					label: '中级'
				}, {
					value: '选项4',
					label: '初级'
				}, {
					value: '选项5',
					label: '员级'
				}],
				value: '',
				tableData: [{
					num: '29',
					name: '技术总监',
					date: '2018-01-11'
				}, {
					num: '30',
					name: '运营总监',
					date: '2016-05-02'
				}, {
					num: '31',
					name: '市场总监',
					date: '2016-05-02'
				}, {
					num: '31',
					name: '总经理',
					date: '2016-05-02'
				}, {
					num: '33',
					name: '研发工程师',
					date: '2016-05-02'
				}, {
					num: '34',
					name: '运维工程师',
					date: '2016-05-02'
				}, {
					num: '35',
					name: '方法',
					date: '2016-05-02',
				}],
				tableData1: [{
					num1: '29',
					name1: '技术总监',
					elval: '正高级',
					createdate: '2018-01-11'
				}, {
					num1: '29',
					name1: '技术总监',
					elval: '正高级',
					createdate: '2018-01-11'
				}, {
					num1: '29',
					name1: '技术总监',
					elval: '正高级',
					createdate: '2018-01-11'
				}, {
					num1: '29',
					name1: '技术总监',
					elval: '正高级',
					createdate: '2018-01-11'
				}, {
					num1: '29',
					name1: '技术总监',
					elval: '正高级',
					createdate: '2018-01-11'
				}, {
					num1: '29',
					name1: '技术总监',
					elval: '正高级',
					createdate: '2018-01-11'
				}, {
					num1: '29',
					name1: '技术总监',
					elval: '正高级',
					createdate: '2018-01-11'
				}, {
					num1: '29',
					name1: '技术总监',
					elval: '正高级',
					createdate: '2018-01-11'
				}, {
					num1: '29',
					name1: '技术总监',
					elval: '正高级',
					createdate: '2018-01-11'
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				}
			};
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
			handleNodeClick(data) {
				console.log(data);
			}
		}
	};
</script>

<style scoped>

</style>
